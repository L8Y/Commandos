use serde::ser::{Serialize, SerializeStruct, Serializer};
use std::os::windows::process::CommandExt;
use std::process::{Command, Stdio};

// Custom type for git commands.
pub struct GitResult {
  stdout: String,
  stderr: String,
}

// Custom serializer for the `GitResult` struct.
impl Serialize for GitResult {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: Serializer,
  {
    // 2 is the number of fields in the struct.
    let mut state = serializer.serialize_struct("GitResult", 2)?;
    // serialize the fields.
    state.serialize_field("stdout", &self.stdout)?;
    state.serialize_field("stderr", &self.stderr)?;
    state.end()
  }
}

const CREATE_NO_WINDOW: u32 = 0x08000000;

// Git command.
#[tauri::command]
pub fn git(args: Vec<String>) -> GitResult {
  let mut command = Command::new("git");
  command.args(args);
  command.creation_flags(CREATE_NO_WINDOW);
  command.stdout(Stdio::piped());
  let output = command.output().expect("failed to execute process");

  let stdout = String::from_utf8_lossy(&output.stdout).to_string(); //.unwrap();
  let stderr = String::from_utf8_lossy(&output.stderr).to_string(); //.unwrap();

  let result = GitResult { stdout, stderr };
  return result;
}
