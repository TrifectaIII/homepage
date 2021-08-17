import {SvgIconTypeMap} from '@material-ui/core';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';
import {
    MailOutline,
    FolderOpen,
} from '@material-ui/icons';

// Type to determine navigation options on header
export interface NavMapType {
    [key: string]: {
        icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
        route: string,
    } | {
        icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
        children: {
            [key: string]:{
                icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
                route: string,
            },
        },
    };
}

// navmap for this app
export const navMap: NavMapType = {
    'Portfolio': {
        icon: FolderOpen,
        route: '/portfolio',
    },
};
