import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    applicationIcon,
    arrowIcon, banIcon, barsIcon, ClarityIcons, cogIcon, downloadCloudIcon, downloadIcon, fileIcon, folderIcon, folderOpenIcon, happyFaceIcon, historyIcon, homeIcon,
    minusIcon, moonIcon, noteIcon, pencilIcon, pinIcon, playIcon,
    plusIcon, refreshIcon, shrinkIcon, sunIcon, syncIcon, timesIcon, trashIcon, treeViewIcon, twoWayArrowsIcon, undoIcon,
    unknownStatusIcon, uploadCloudIcon, userIcon, viewCardsIcon, viewListIcon, wandIcon, windowCloseIcon, windowMaxIcon, windowMinIcon,
    windowRestoreIcon
} from '@cds/core/icon';


const icons = [
    playIcon, plusIcon, shrinkIcon, noteIcon, timesIcon,
    downloadCloudIcon, uploadCloudIcon, wandIcon, unknownStatusIcon, windowCloseIcon,
    cogIcon, folderIcon, folderOpenIcon, pencilIcon, banIcon,
    minusIcon, windowMinIcon, windowMaxIcon, windowRestoreIcon, undoIcon,
    fileIcon, sunIcon, moonIcon, homeIcon, historyIcon,
    trashIcon, downloadIcon, twoWayArrowsIcon, userIcon,
    refreshIcon, happyFaceIcon, arrowIcon, syncIcon, pinIcon,
    barsIcon, viewCardsIcon, viewListIcon, treeViewIcon,
    applicationIcon
]

ClarityIcons.addIcons(...icons);
ClarityIcons.addIcons(['commit', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"></path></svg>']);
ClarityIcons.addIcons(['branch', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M5.75 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 19.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM5.75 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"></path><path fill-rule="evenodd" d="M5.75 16.75A.75.75 0 006.5 16V8A.75.75 0 005 8v8c0 .414.336.75.75.75z"></path><path fill-rule="evenodd" d="M17.5 8.75v-1H19v1a3.75 3.75 0 01-3.75 3.75h-7a1.75 1.75 0 00-1.75 1.75H5A3.25 3.25 0 018.25 11h7a2.25 2.25 0 002.25-2.25z"></path></svg>']);
ClarityIcons.addIcons(['branch-16', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>']);
ClarityIcons.addIcons(['merge-16', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>']);

ClarityIcons.addIcons(['push-16', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"></path></svg>']);
ClarityIcons.addIcons(['pull-16', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13 8V6H7V4h6V2l3 3-3 3zM4 2H3v1h1V2zm7 5h1v6c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h-1V1H2v9h9V7zm0 4H1v2h2v-1h3v1h5v-2zM4 6H3v1h1V6zm0-2H3v1h1V4zM3 9h1V8H3v1z"></path></svg>']);
ClarityIcons.addIcons(['side-by-side', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0011 20.25V3.75A1.75 1.75 0 009.25 2h-5.5zM3.5 3.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25V3.75zM14.75 2A1.75 1.75 0 0013 3.75v16.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2h-5.5zm-.25 1.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25V3.75z"></path></svg>'])
ClarityIcons.addIcons(['line-by-line', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M22 3.75A1.75 1.75 0 0020.25 2H3.75A1.75 1.75 0 002 3.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 9.25v-5.5zm-1.75-.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25h16.5zM22 14.75A1.75 1.75 0 0020.25 13H3.75A1.75 1.75 0 002 14.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25v-5.5zm-1.75-.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25h16.5z"></path></svg>'])
ClarityIcons.addIcons(['git-clone', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.25 9.331V.75a.75.75 0 011.5 0v8.58l1.949-2.11A.75.75 0 1115.8 8.237l-3.25 3.52a.75.75 0 01-1.102 0l-3.25-3.52A.75.75 0 119.3 7.22l1.949 2.111z"></path><path fill-rule="evenodd" d="M2.5 3.75a.25.25 0 01.25-.25h5.5a.75.75 0 100-1.5h-5.5A1.75 1.75 0 001 3.75v11.5c0 .966.784 1.75 1.75 1.75h6.204c-.171 1.375-.805 2.652-1.77 3.757A.75.75 0 007.75 22h8.5a.75.75 0 00.565-1.243c-.964-1.105-1.598-2.382-1.769-3.757h6.204A1.75 1.75 0 0023 15.25V3.75A1.75 1.75 0 0021.25 2h-5.5a.75.75 0 000 1.5h5.5a.25.25 0 01.25.25v11.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V3.75zM10.463 17c-.126 1.266-.564 2.445-1.223 3.5h5.52c-.66-1.055-1.098-2.234-1.223-3.5h-3.074z"></path></svg>']);
ClarityIcons.addIcons(['checkout', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.72 21.78a.75.75 0 001.06-1.06L5.56 17.5h14.69a.75.75 0 000-1.5H5.56l3.22-3.22a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l4.5 4.5zm8.56-9.5a.75.75 0 11-1.06-1.06L18.44 8H3.75a.75.75 0 010-1.5h14.69l-3.22-3.22a.75.75 0 011.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5z"></path></svg>']);
ClarityIcons.addIcons(['checkout-16', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M5.22 14.78a.75.75 0 001.06-1.06L4.56 12h8.69a.75.75 0 000-1.5H4.56l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3zm5.56-6.5a.75.75 0 11-1.06-1.06l1.72-1.72H2.75a.75.75 0 010-1.5h8.69L9.72 2.28a.75.75 0 011.06-1.06l3 3a.75.75 0 010 1.06l-3 3z"></path></svg>']);

// ClarityIcons.addIcons(['merge-16', '']);

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class ClarityIconsModule { }
