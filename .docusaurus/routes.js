import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '93a'),
    exact: true
  },
  {
    path: '/1.6',
    component: ComponentCreator('/1.6', '84b'),
    routes: [
      {
        path: '/1.6/',
        component: ComponentCreator('/1.6/', '94f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/CLI commands',
        component: ComponentCreator('/1.6/CLI commands', 'af1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/Installation',
        component: ComponentCreator('/1.6/Installation', '57b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/Release notes',
        component: ComponentCreator('/1.6/Release notes', 'bc9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/Requirements',
        component: ComponentCreator('/1.6/Requirements', '138'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XN module/Access through REST API',
        component: ComponentCreator('/1.6/XN module/Access through REST API', '265'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XN module/Dashboards',
        component: ComponentCreator('/1.6/XN module/Dashboards', '1ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XN module/Overview',
        component: ComponentCreator('/1.6/XN module/Overview', '030'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XN module/System Status',
        component: ComponentCreator('/1.6/XN module/System Status', '52d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XND module/DDoS Dashboards',
        component: ComponentCreator('/1.6/XND module/DDoS Dashboards', 'c12'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XND module/DDoS Mitigation',
        component: ComponentCreator('/1.6/XND module/DDoS Mitigation', 'aca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XND module/FlowControl XND Module',
        component: ComponentCreator('/1.6/XND module/FlowControl XND Module', '3e4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XND module/Performance',
        component: ComponentCreator('/1.6/XND module/Performance', 'fe9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XND module/XND module configuration',
        component: ComponentCreator('/1.6/XND module/XND module configuration', '432'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XNS module/Introduction',
        component: ComponentCreator('/1.6/XNS module/Introduction', '8db'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XNS module/Security Dashboards',
        component: ComponentCreator('/1.6/XNS module/Security Dashboards', 'f60'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XNS module/Threat Detection',
        component: ComponentCreator('/1.6/XNS module/Threat Detection', 'bcb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/1.6/XNS module/Threat Intelligence Engine',
        component: ComponentCreator('/1.6/XNS module/Threat Intelligence Engine', '86c'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.0',
    component: ComponentCreator('/2.0', '8c2'),
    routes: [
      {
        path: '/2.0/',
        component: ComponentCreator('/2.0/', 'f61'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Alerts/',
        component: ComponentCreator('/2.0/User Guide/Alerts/', 'beb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.0/User Guide/Alerts/Alerts Table', 'eb7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.0/User Guide/Alerts/Rule Sets', '21f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/',
        component: ComponentCreator('/2.0/User Guide/Configuration/', 'e1d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Account Management/', '011'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.0/User Guide/Configuration/Account Management/Accounts', 'd72'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.0/User Guide/Configuration/Account Management/Auth Providers', '129'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.0/User Guide/Configuration/Account Management/User Roles_', 'b89'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.0/User Guide/Configuration/General Settings/', '6a3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.0/User Guide/Configuration/General Settings/Notifications', '8bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.0/User Guide/Configuration/General Settings/Retention', '410'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.0/User Guide/Configuration/General Settings/System Status_', '2e8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/', 'c2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/External Destination',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/External Destination', 'aa2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/NTP', 'e54'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/Proxy', 'b78'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/SMTP', 'fe7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.0/User Guide/Configuration/Integrations/SNMP', 'c48'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.0/User Guide/Configuration/Licenses', 'dcb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/', '79b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/Business Hours', 'f10'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/Lookups', 'e0e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/Maintenance Windows', 'c21'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/Mappers', 'd0f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.0/User Guide/Configuration/Mapping/Tags', '167'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.0/User Guide/Configuration/NetFlow/', 'e6e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.0/User Guide/Configuration/NetFlow/Netflow', '24c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.0/User Guide/Configuration/NetFlow/SFlow', '35c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/', 'd54'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Alert fields', '248'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Collectors', 'd5a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Email Templates', '060'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Fields', '620'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Metrics', '6e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Ranges', '186'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Recipients', '809'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.0/User Guide/Configuration/Objects/Right click actions', 'a90'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Security/', 'f6a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.0/User Guide/Configuration/Security/Audit Log', '2b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.0/User Guide/Configuration/Security/Certificates', '57c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.0/User Guide/Configuration/Update/', 'd8d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.0/User Guide/Configuration/Update/About', 'ce3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.0/User Guide/Configuration/Update/Update', '430'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/',
        component: ComponentCreator('/2.0/User Guide/Dashboards/', '9f3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.0/User Guide/Dashboards/Management/', '10e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.0/User Guide/Dashboards/Management/Dashboards_', 'ffb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.0/User Guide/Dashboards/Management/Widgets', '922'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.0/User Guide/Dashboards/Raw Data/', '3eb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.0/User Guide/Dashboards/Raw Data/Data_streams', '9a6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/User interface_',
        component: ComponentCreator('/2.0/User interface_', '7d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0/Y-Requirements',
        component: ComponentCreator('/2.0/Y-Requirements', 'f99'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.0.27',
    component: ComponentCreator('/2.0.27', '306'),
    routes: [
      {
        path: '/2.0.27/',
        component: ComponentCreator('/2.0.27/', '68c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/3rdpartylicenses',
        component: ComponentCreator('/2.0.27/3rdpartylicenses', '97f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/',
        component: ComponentCreator('/2.0.27/Examples/', '836'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Alert rule from scratch',
        component: ComponentCreator('/2.0.27/Examples/Alert rule from scratch', 'c12'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Collector - creation example',
        component: ComponentCreator('/2.0.27/Examples/Collector - creation example', 'e6f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Fields - creation example',
        component: ComponentCreator('/2.0.27/Examples/Fields - creation example', 'fee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.0.27/Examples/Fields advanced - creation example', '9b1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.0.27/Examples/Metrics - advance creation example', '6e8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Metrics - creation example',
        component: ComponentCreator('/2.0.27/Examples/Metrics - creation example', 'a9b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Rule from template',
        component: ComponentCreator('/2.0.27/Examples/Rule from template', '933'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Widgets/',
        component: ComponentCreator('/2.0.27/Examples/Widgets/', 'ca5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Widgets/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.0.27/Examples/Widgets/Widget KPI Alerts last 24h', '378'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Examples/Widgets/Widget Total Traffic 15min',
        component: ComponentCreator('/2.0.27/Examples/Widgets/Widget Total Traffic 15min', 'e40'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Installation guide',
        component: ComponentCreator('/2.0.27/Installation guide', 'aa9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Release notes',
        component: ComponentCreator('/2.0.27/Release notes', 'ef1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/Requirements',
        component: ComponentCreator('/2.0.27/Requirements', '4d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Alerts/',
        component: ComponentCreator('/2.0.27/User Guide/Alerts/', '2d2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.0.27/User Guide/Alerts/Alerts Table', '372'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.0.27/User Guide/Alerts/Rule Sets', '94d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/', '14e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Account Management/', '004'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Account Management/Accounts', '010'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Account Management/Auth Providers', '872'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Account Management/User Roles_', 'c13'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/General Settings/', '186'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/General Settings/Notifications', '7c0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/General Settings/Retention', '5dd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/General Settings/System Status_', 'ba4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/', '7a7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/External Destination',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/External Destination', '696'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/NTP', '11a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/Proxy', '8d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/SMTP', 'bf5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Integrations/SNMP', '789'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Licenses', '695'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/', '1c7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/Business Hours', '1e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/Lookups', 'c6a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/Maintenance Windows', '596'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/Mappers', '1e7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Mapping/Tags', '9be'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/NetFlow/', 'ce9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/NetFlow/Netflow', 'ad9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/NetFlow/SFlow', 'aae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/', 'd11'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Alert fields', 'ed1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Collectors', 'f85'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Email Templates', '622'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Fields', 'b83'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Metrics', 'dbf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Ranges', '29b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Recipients', '344'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Objects/Right click actions', '7bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Security/', 'c0d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Security/Audit Log', '22f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Security/Certificates', 'a3a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Update/', '44d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Update/About', '128'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.0.27/User Guide/Configuration/Update/Update', '5ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/', '1f6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/Management/', '122'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/Management/Dashboards_', '6cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/Management/Widgets', 'd84'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/Raw Data/', 'd2b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.0.27/User Guide/Dashboards/Raw Data/Data_streams', 'a20'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.27/User interface',
        component: ComponentCreator('/2.0.27/User interface', '904'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.0.29',
    component: ComponentCreator('/2.0.29', 'ddb'),
    routes: [
      {
        path: '/2.0.29/',
        component: ComponentCreator('/2.0.29/', 'bed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/3rdpartylicenses',
        component: ComponentCreator('/2.0.29/3rdpartylicenses', 'b5f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/',
        component: ComponentCreator('/2.0.29/Examples/', '7a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Alert rule from scratch',
        component: ComponentCreator('/2.0.29/Examples/Alert rule from scratch', 'afe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Collector - creation example',
        component: ComponentCreator('/2.0.29/Examples/Collector - creation example', 'cee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Fields - creation example',
        component: ComponentCreator('/2.0.29/Examples/Fields - creation example', '614'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.0.29/Examples/Fields advanced - creation example', '78d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.0.29/Examples/Metrics - advance creation example', '4a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Metrics - creation example',
        component: ComponentCreator('/2.0.29/Examples/Metrics - creation example', '2ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Rule from template',
        component: ComponentCreator('/2.0.29/Examples/Rule from template', '7e3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Widgets/',
        component: ComponentCreator('/2.0.29/Examples/Widgets/', '898'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Widgets/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.0.29/Examples/Widgets/Widget KPI Alerts last 24h', '53e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Examples/Widgets/Widget Total Traffic 15min',
        component: ComponentCreator('/2.0.29/Examples/Widgets/Widget Total Traffic 15min', '4df'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Installation guide',
        component: ComponentCreator('/2.0.29/Installation guide', 'd5e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Release notes',
        component: ComponentCreator('/2.0.29/Release notes', 'c92'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/Requirements',
        component: ComponentCreator('/2.0.29/Requirements', 'cee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Alerts/',
        component: ComponentCreator('/2.0.29/User Guide/Alerts/', '11b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.0.29/User Guide/Alerts/Alerts Table', '97e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.0.29/User Guide/Alerts/Rule Sets', '150'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/', 'cd3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Account Management/', '425'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Account Management/Accounts', '470'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Account Management/Auth Providers', 'c19'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Account Management/User Roles_', '3ac'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/General Settings/', '56b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/General Settings/Notifications', 'dbd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/General Settings/Retention', '63d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/General Settings/System Status_', 'b9e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/', 'edc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/External Destination',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/External Destination', 'de2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/NTP', '87a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/Proxy', '831'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/SMTP', 'bf5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Integrations/SNMP', 'b68'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Licenses', '91b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/', '8dc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/Business Hours', 'c07'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/Lookups', 'fff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/Maintenance Windows', '4d2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/Mappers', '4b3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Mapping/Tags', 'cb0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/NetFlow/', '932'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/NetFlow/Netflow', '816'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/NetFlow/SFlow', '92b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/', 'ba1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Alert fields', 'd4b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Collectors', 'd0a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Email Templates', 'c45'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Fields', '97a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Metrics', 'd9b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Ranges', '0a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Recipients', 'b36'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Objects/Right click actions', 'a6b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Security/', '976'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Security/Audit Log', '08f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Security/Certificates', 'a30'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Update/', 'cc3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Update/About', '77f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.0.29/User Guide/Configuration/Update/Update', '6ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/', 'c67'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/Management/', 'a8c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/Management/Dashboards_', '1d1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/Management/Widgets', 'b84'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/Raw Data/', 'f14'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.0.29/User Guide/Dashboards/Raw Data/Data_streams', '920'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.0.29/User interface',
        component: ComponentCreator('/2.0.29/User interface', '409'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.1.0',
    component: ComponentCreator('/2.1.0', '3f0'),
    routes: [
      {
        path: '/2.1.0/',
        component: ComponentCreator('/2.1.0/', 'f21'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/3rdpartylicenses',
        component: ComponentCreator('/2.1.0/3rdpartylicenses', 'f49'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/',
        component: ComponentCreator('/2.1.0/Examples/', 'adf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Alert rule from scratch',
        component: ComponentCreator('/2.1.0/Examples/Alert rule from scratch', '37f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Collector - creation example',
        component: ComponentCreator('/2.1.0/Examples/Collector - creation example', '801'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Fields - creation example',
        component: ComponentCreator('/2.1.0/Examples/Fields - creation example', '285'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.1.0/Examples/Fields advanced - creation example', '501'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.1.0/Examples/Metrics - advance creation example', '0c2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Metrics - creation example',
        component: ComponentCreator('/2.1.0/Examples/Metrics - creation example', 'dbc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Rule from template',
        component: ComponentCreator('/2.1.0/Examples/Rule from template', 'f42'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Widgets/',
        component: ComponentCreator('/2.1.0/Examples/Widgets/', 'a92'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Widgets/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.1.0/Examples/Widgets/Widget KPI Alerts last 24h', '3d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Examples/Widgets/Widget Total Traffic 15min',
        component: ComponentCreator('/2.1.0/Examples/Widgets/Widget Total Traffic 15min', '2a9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Installation guide',
        component: ComponentCreator('/2.1.0/Installation guide', '31d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Release notes',
        component: ComponentCreator('/2.1.0/Release notes', '72a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/Requirements',
        component: ComponentCreator('/2.1.0/Requirements', 'f2f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Alerts/',
        component: ComponentCreator('/2.1.0/User Guide/Alerts/', '96a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.1.0/User Guide/Alerts/Alerts Table', '7f9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.1.0/User Guide/Alerts/Rule Sets', '1a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/', '091'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Account Management/', '62a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Account Management/Accounts', 'bce'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Account Management/Auth Providers', '68f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Account Management/User Roles_', '0bb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/', 'af1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/Diagnostics', '91e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/Maintenance Mode', 'ee2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/Notifications', '8bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/Retention', 'b10'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/General Settings/System Status_', '544'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/', '6e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/External Destinations', 'a45'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/NTP', 'b6b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/Proxy', 'b76'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/SMTP', '63c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Integrations/SNMP', '6d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Licenses', '93a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/', 'f92'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/Business Hours', '566'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/Lookups', 'f33'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/Maintenance Windows', '02c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/Mappers', 'bca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Mapping/Tags', '8fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/NetFlow/', '40e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/NetFlow/Forwarding', '7eb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/NetFlow/Netflow', 'a6b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/NetFlow/SFlow', 'bb0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/', '5a7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Alert fields', 'f7c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Collectors', '717'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Email Templates', '294'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Fields', '48b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Metrics', 'c1e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Ranges', '7ae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Recipients', 'fea'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Objects/Right click actions', '5f9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Security/', 'c2e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Security/Audit Log', '420'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Security/Certificates', 'e77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Update/', '8d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Update/About', '771'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.1.0/User Guide/Configuration/Update/Update', '58a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/', '1bb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/Management/', '1f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/Management/Dashboards_', '660'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/Management/Widgets', '27b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/Raw Data/', 'f1c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.1.0/User Guide/Dashboards/Raw Data/Data_streams', '3cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.1.0/User interface',
        component: ComponentCreator('/2.1.0/User interface', '3ce'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.2.1',
    component: ComponentCreator('/2.2.1', '1da'),
    routes: [
      {
        path: '/2.2.1/',
        component: ComponentCreator('/2.2.1/', 'abc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/3rdpartylicenses',
        component: ComponentCreator('/2.2.1/3rdpartylicenses', 'b3e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/',
        component: ComponentCreator('/2.2.1/Examples/', 'f78'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Baseline Example/',
        component: ComponentCreator('/2.2.1/Examples/Baseline Example/', 'e97'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/2.2.1/Examples/Baseline Example/Using baseline in a rule', '3e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/2.2.1/Examples/Baseline Example/Using baseline in a widget', '0c8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Collector - creation example',
        component: ComponentCreator('/2.2.1/Examples/Collector - creation example', '79b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Fields Examples/',
        component: ComponentCreator('/2.2.1/Examples/Fields Examples/', 'b66'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/2.2.1/Examples/Fields Examples/Fields - creation example', '011'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.2.1/Examples/Fields Examples/Fields advanced - creation example', 'df1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Metrics Examples/',
        component: ComponentCreator('/2.2.1/Examples/Metrics Examples/', 'e54'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.2.1/Examples/Metrics Examples/Metrics - advance creation example', '9fe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/2.2.1/Examples/Metrics Examples/Metrics - creation example', '07e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Rules Examples/',
        component: ComponentCreator('/2.2.1/Examples/Rules Examples/', 'd2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Rules Examples/Alert rule from scratch',
        component: ComponentCreator('/2.2.1/Examples/Rules Examples/Alert rule from scratch', '2e0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Rules Examples/Rule from template',
        component: ComponentCreator('/2.2.1/Examples/Rules Examples/Rule from template', '362'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Widgets Examples/',
        component: ComponentCreator('/2.2.1/Examples/Widgets Examples/', '187'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Widgets Examples/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.2.1/Examples/Widgets Examples/Widget KPI Alerts last 24h', 'f57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Examples/Widgets Examples/Widget Total Traffic 15min',
        component: ComponentCreator('/2.2.1/Examples/Widgets Examples/Widget Total Traffic 15min', 'fa4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Installation guide',
        component: ComponentCreator('/2.2.1/Installation guide', 'cde'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Release notes',
        component: ComponentCreator('/2.2.1/Release notes', 'f0b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/Requirements',
        component: ComponentCreator('/2.2.1/Requirements', '7f9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Alerts/',
        component: ComponentCreator('/2.2.1/User Guide/Alerts/', 'cde'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.2.1/User Guide/Alerts/Alerts Table', '0ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.2.1/User Guide/Alerts/Rule Sets', '9c9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/', 'c98'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Account Management/', '5e4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Account Management/Accounts', 'a28'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Account Management/Auth Providers', '0e8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Account Management/User Roles_', '0ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/', 'f25'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/Backup and Restore',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/Backup and Restore', 'e9a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/Diagnostics', 'fe5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/Maintenance Mode', 'a21'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/Notifications', '130'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/Retention', '7f1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/General Settings/System Status_', '692'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/', '25b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/External Destinations', '342'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/FTP',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/FTP', '0fe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/NTP', '3f2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/Proxy', '362'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/SMTP', 'a56'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Integrations/SNMP', 'b8f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Licenses', '748'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/', 'dc3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/Business Hours', 'cec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/Lookups', 'a8b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/Maintenance Windows', '441'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/Mappers', 'c47'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Mapping/Tags', '53e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/NetFlow/', '40a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/NetFlow/Exporter Groups',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/NetFlow/Exporter Groups', 'ca8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/NetFlow/Forwarding', '2b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/NetFlow/Netflow', 'cf6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/NetFlow/SFlow', 'f43'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/', '12c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Alert fields', '327'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Collectors', '6c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Email Templates', 'f11'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Fields', 'ba2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Metrics', 'a26'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Ranges', '43c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Recipients', '6d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Report schedule',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Report schedule', '210'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Objects/Right click actions', '335'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Security/', 'c5f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Security/Audit Log', '890'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Security/Certificates', '94b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Update/', '81d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Update/About', 'e4a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.2.1/User Guide/Configuration/Update/Update', 'd5d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/', '407'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Favorites/',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Favorites/', 'a68'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Favorites/Bookmarks',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Favorites/Bookmarks', 'd0a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Favorites/Dashboard',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Favorites/Dashboard', 'beb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Favorites/Filters',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Favorites/Filters', '4f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Favorites/Widgets',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Favorites/Widgets', 'aaf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Management/', 'b1a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Management/Dashboards_', 'a26'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Management/Report filters',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Management/Report filters', '50d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Management/Reports',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Management/Reports', '3cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Management/Widgets', 'c01'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Raw Data/', 'c41'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.2.1/User Guide/Dashboards/Raw Data/Data_streams', 'a2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.1/User interface',
        component: ComponentCreator('/2.2.1/User interface', '70d'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.2.2',
    component: ComponentCreator('/2.2.2', '203'),
    routes: [
      {
        path: '/2.2.2/',
        component: ComponentCreator('/2.2.2/', '339'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/3rdpartylicenses',
        component: ComponentCreator('/2.2.2/3rdpartylicenses', 'cf8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/',
        component: ComponentCreator('/2.2.2/Examples/', '2ed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Baseline Example/',
        component: ComponentCreator('/2.2.2/Examples/Baseline Example/', 'bb8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/2.2.2/Examples/Baseline Example/Using baseline in a rule', '285'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/2.2.2/Examples/Baseline Example/Using baseline in a widget', '1fe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Collector - creation example',
        component: ComponentCreator('/2.2.2/Examples/Collector - creation example', '030'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Fields Examples/',
        component: ComponentCreator('/2.2.2/Examples/Fields Examples/', 'c01'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/2.2.2/Examples/Fields Examples/Fields - creation example', '63b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.2.2/Examples/Fields Examples/Fields advanced - creation example', '3f8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Metrics Examples/',
        component: ComponentCreator('/2.2.2/Examples/Metrics Examples/', '3c3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.2.2/Examples/Metrics Examples/Metrics - advance creation example', '705'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/2.2.2/Examples/Metrics Examples/Metrics - creation example', 'b18'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Rules Examples/',
        component: ComponentCreator('/2.2.2/Examples/Rules Examples/', '299'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Rules Examples/Alert rule from scratch',
        component: ComponentCreator('/2.2.2/Examples/Rules Examples/Alert rule from scratch', '4b1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Rules Examples/Rule from template',
        component: ComponentCreator('/2.2.2/Examples/Rules Examples/Rule from template', '85d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Widgets Examples/',
        component: ComponentCreator('/2.2.2/Examples/Widgets Examples/', '34e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Widgets Examples/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.2.2/Examples/Widgets Examples/Widget KPI Alerts last 24h', 'dd3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Examples/Widgets Examples/Widget Total Traffic 15min',
        component: ComponentCreator('/2.2.2/Examples/Widgets Examples/Widget Total Traffic 15min', '75b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Installation guide',
        component: ComponentCreator('/2.2.2/Installation guide', 'cab'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/NQL/NQL_examples',
        component: ComponentCreator('/2.2.2/NQL/NQL_examples', '2cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Release notes',
        component: ComponentCreator('/2.2.2/Release notes', 'faa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/Requirements',
        component: ComponentCreator('/2.2.2/Requirements', 'c0f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Alerts/',
        component: ComponentCreator('/2.2.2/User Guide/Alerts/', 'd9a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.2.2/User Guide/Alerts/Alerts Table', 'b4a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.2.2/User Guide/Alerts/Rule Sets', 'ad8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/', '12e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Account Management/', '30c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Account Management/Accounts', '196'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Account Management/Auth Providers', '225'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Account Management/User Roles_', '0e6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/', '7f7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/Backup and Restore',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/Backup and Restore', '3cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/Diagnostics', '9fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/Maintenance Mode', '3bf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/Notifications', '11f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/Retention', '139'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/General Settings/System Status_', 'f6e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/', '1e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/External Destinations', 'b0f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/FTP',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/FTP', 'dac'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/NTP', '03a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/Proxy', 'a12'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/SMTP', '882'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Integrations/SNMP', '109'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Licenses', '60f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/', 'fb9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/Business Hours', '765'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/Lookups', 'bdc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/Maintenance Windows', 'dd7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/Mappers', '293'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Mapping/Tags', '76c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/NetFlow/', 'b9a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/NetFlow/Exporter Groups',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/NetFlow/Exporter Groups', 'ec8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/NetFlow/Forwarding', 'f4f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/NetFlow/Netflow', 'adc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/NetFlow/SFlow', '2d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/', '752'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Alert fields', '37e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Collectors', '3e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Email Templates', '515'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Fields', 'ca5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Metrics', 'bda'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Ranges', '379'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Recipients', 'e1a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Report schedule',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Report schedule', 'be7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Objects/Right click actions', '89e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Security/', 'aae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Security/Audit Log', '1f8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Security/Certificates', '4ef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Update/', '136'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Update/About', '048'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.2.2/User Guide/Configuration/Update/Update', 'b06'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/', 'cc8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Favorites/',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Favorites/', 'cb3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Favorites/Bookmarks',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Favorites/Bookmarks', '75f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Favorites/Dashboard',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Favorites/Dashboard', '3c4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Favorites/Filters',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Favorites/Filters', '7cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Favorites/Widgets',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Favorites/Widgets', '19e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Management/', '8bb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Management/Dashboards_', 'df6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Management/Report filters',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Management/Report filters', 'd46'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Management/Reports',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Management/Reports', '8d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Management/Widgets', '09a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Raw Data/', 'afb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.2.2/User Guide/Dashboards/Raw Data/Data_streams', 'cc6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.2/User interface',
        component: ComponentCreator('/2.2.2/User interface', '4f9'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.2.3',
    component: ComponentCreator('/2.2.3', 'e1c'),
    routes: [
      {
        path: '/2.2.3/',
        component: ComponentCreator('/2.2.3/', '139'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/3rdpartylicenses',
        component: ComponentCreator('/2.2.3/3rdpartylicenses', '121'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/',
        component: ComponentCreator('/2.2.3/Examples/', '9c5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Baseline Example/',
        component: ComponentCreator('/2.2.3/Examples/Baseline Example/', '2c1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/2.2.3/Examples/Baseline Example/Using baseline in a rule', 'd21'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/2.2.3/Examples/Baseline Example/Using baseline in a widget', '417'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Collector - creation example',
        component: ComponentCreator('/2.2.3/Examples/Collector - creation example', 'a4b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Fields Examples/',
        component: ComponentCreator('/2.2.3/Examples/Fields Examples/', '9b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/2.2.3/Examples/Fields Examples/Fields - creation example', '385'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.2.3/Examples/Fields Examples/Fields advanced - creation example', '8ae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Metrics Examples/',
        component: ComponentCreator('/2.2.3/Examples/Metrics Examples/', 'c85'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.2.3/Examples/Metrics Examples/Metrics - advance creation example', '790'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/2.2.3/Examples/Metrics Examples/Metrics - creation example', '9d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Rules Examples/',
        component: ComponentCreator('/2.2.3/Examples/Rules Examples/', '36d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Rules Examples/Alert rule from scratch',
        component: ComponentCreator('/2.2.3/Examples/Rules Examples/Alert rule from scratch', 'b7d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Rules Examples/Rule from template',
        component: ComponentCreator('/2.2.3/Examples/Rules Examples/Rule from template', '442'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Widgets Examples/',
        component: ComponentCreator('/2.2.3/Examples/Widgets Examples/', 'cf2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Widgets Examples/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.2.3/Examples/Widgets Examples/Widget KPI Alerts last 24h', '130'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Examples/Widgets Examples/Widget Total Traffic 15min',
        component: ComponentCreator('/2.2.3/Examples/Widgets Examples/Widget Total Traffic 15min', '184'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Installation guide',
        component: ComponentCreator('/2.2.3/Installation guide', '95f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/NQL/nql_cheat_sheet',
        component: ComponentCreator('/2.2.3/NQL/nql_cheat_sheet', '6a8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/NQL/NQL_examples',
        component: ComponentCreator('/2.2.3/NQL/NQL_examples', '200'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Release notes',
        component: ComponentCreator('/2.2.3/Release notes', '8b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/Requirements',
        component: ComponentCreator('/2.2.3/Requirements', '2f3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Alerts/',
        component: ComponentCreator('/2.2.3/User Guide/Alerts/', 'ba4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.2.3/User Guide/Alerts/Alerts Table', '7cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.2.3/User Guide/Alerts/Rule Sets', 'c8f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/', '5c0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Account Management/', '1f3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Account Management/Accounts', 'b05'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Account Management/Auth Providers', 'deb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Account Management/User Roles_', '03a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/', 'fec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/Backup and Restore',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/Backup and Restore', '7c9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/Diagnostics', '161'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/Maintenance Mode', '7aa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/Notifications', '0ed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/Retention', '52d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/General Settings/System Status_', '74e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/', 'ebe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/External Destinations', 'fa3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/FTP',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/FTP', 'fe1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/NTP', 'be8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/Proxy', 'f26'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/SMTP', '6a3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Integrations/SNMP', '912'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Licenses', '408'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/', '39f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/Business Hours', '3ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/Lookups', '51e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/Maintenance Windows', 'e1f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/Mappers', '888'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Mapping/Tags', 'a6e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/NetFlow/', '188'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/NetFlow/Exporter Groups',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/NetFlow/Exporter Groups', 'dfc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/NetFlow/Forwarding', '125'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/NetFlow/Netflow', 'ec0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/NetFlow/SFlow', '567'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/', '060'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Alert fields',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Alert fields', 'c85'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Collectors', '9d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Email Templates', '8d9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Fields', 'c43'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Metrics', '8b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Ranges', '1e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Recipients', '6c1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Report schedule',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Report schedule', '8f3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Objects/Right click actions', '7c4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Security/', '6bd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Security/Audit Log', '52a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Security/Certificates', '869'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Update/', '257'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Update/About', 'f6d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.2.3/User Guide/Configuration/Update/Update', 'a50'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/', '9a1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Favorites/',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Favorites/', 'e3d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Favorites/Bookmarks',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Favorites/Bookmarks', '450'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Favorites/Dashboard',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Favorites/Dashboard', 'af6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Favorites/Filters',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Favorites/Filters', '24a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Favorites/Widgets',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Favorites/Widgets', '1c8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Management/', '443'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Management/Dashboards_', 'a3e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Management/Report filters',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Management/Report filters', '647'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Management/Reports',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Management/Reports', '08e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Management/Widgets', '9be'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Raw Data/', 'a7e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.2.3/User Guide/Dashboards/Raw Data/Data_streams', 'ce6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.2.3/User interface',
        component: ComponentCreator('/2.2.3/User interface', '043'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.3',
    component: ComponentCreator('/2.3', '35f'),
    routes: [
      {
        path: '/2.3/',
        component: ComponentCreator('/2.3/', 'cd8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/3rdpartylicenses',
        component: ComponentCreator('/2.3/3rdpartylicenses', '538'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/',
        component: ComponentCreator('/2.3/Examples/', 'f06'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Baseline Example/',
        component: ComponentCreator('/2.3/Examples/Baseline Example/', '9e4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/2.3/Examples/Baseline Example/Using baseline in a rule', '42a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/2.3/Examples/Baseline Example/Using baseline in a widget', 'ecf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Collector - creation example',
        component: ComponentCreator('/2.3/Examples/Collector - creation example', '709'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Fields Examples/',
        component: ComponentCreator('/2.3/Examples/Fields Examples/', '0b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/2.3/Examples/Fields Examples/Fields - creation example', 'ffa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.3/Examples/Fields Examples/Fields advanced - creation example', '8fd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Metrics Examples/',
        component: ComponentCreator('/2.3/Examples/Metrics Examples/', 'ef5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.3/Examples/Metrics Examples/Metrics - advance creation example', '0aa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/2.3/Examples/Metrics Examples/Metrics - creation example', 'b4a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Rules Examples/',
        component: ComponentCreator('/2.3/Examples/Rules Examples/', 'f84'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Rules Examples/Alert rule from scratch',
        component: ComponentCreator('/2.3/Examples/Rules Examples/Alert rule from scratch', '3af'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Rules Examples/Rule from template',
        component: ComponentCreator('/2.3/Examples/Rules Examples/Rule from template', '666'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Widgets Examples/',
        component: ComponentCreator('/2.3/Examples/Widgets Examples/', '3c3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Widgets Examples/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.3/Examples/Widgets Examples/Widget KPI Alerts last 24h', 'a4e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Examples/Widgets Examples/Widget Total Traffic 15min',
        component: ComponentCreator('/2.3/Examples/Widgets Examples/Widget Total Traffic 15min', 'a0d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Installation guide',
        component: ComponentCreator('/2.3/Installation guide', 'cb4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/NQL/Built-in filters',
        component: ComponentCreator('/2.3/NQL/Built-in filters', '3c5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/NQL/NQL documentation',
        component: ComponentCreator('/2.3/NQL/NQL documentation', '9b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/NQL/nql_cheat_sheet',
        component: ComponentCreator('/2.3/NQL/nql_cheat_sheet', '572'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/NQL/NQL_examples',
        component: ComponentCreator('/2.3/NQL/NQL_examples', '56a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/NQL/Searchbar',
        component: ComponentCreator('/2.3/NQL/Searchbar', '0cb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Release notes',
        component: ComponentCreator('/2.3/Release notes', '8e3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/Requirements',
        component: ComponentCreator('/2.3/Requirements', '5f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Alerts/',
        component: ComponentCreator('/2.3/User Guide/Alerts/', 'a74'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Alerts/Alerts Table',
        component: ComponentCreator('/2.3/User Guide/Alerts/Alerts Table', 'b2d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Alerts/Rule Sets',
        component: ComponentCreator('/2.3/User Guide/Alerts/Rule Sets', 'a07'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/',
        component: ComponentCreator('/2.3/User Guide/Configuration/', 'b9f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Account Management/', '62d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.3/User Guide/Configuration/Account Management/Accounts', '72e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.3/User Guide/Configuration/Account Management/Auth Providers', 'e60'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.3/User Guide/Configuration/Account Management/User Roles_', 'b98'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/', '08d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/Backup and Restore',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/Backup and Restore', '549'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/Diagnostics', '227'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/Maintenance Mode', 'bef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/Notifications', 'e94'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/Retention', '543'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.3/User Guide/Configuration/General Settings/System Status_', 'de8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/', '081'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/External Destinations', 'e48'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/FTP',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/FTP', '268'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/NTP', 'd86'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/Proxy', '551'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/SMTP', 'c64'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.3/User Guide/Configuration/Integrations/SNMP', 'f45'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.3/User Guide/Configuration/Licenses', '906'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/', 'c68'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/Business Hours', '582'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/Lookups', '276'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/Maintenance Windows', 'a8d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/Mappers', '73e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.3/User Guide/Configuration/Mapping/Tags', 'a03'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.3/User Guide/Configuration/NetFlow/', 'e1e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/NetFlow/Exporter Restrictions',
        component: ComponentCreator('/2.3/User Guide/Configuration/NetFlow/Exporter Restrictions', '12a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.3/User Guide/Configuration/NetFlow/Forwarding', 'd09'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.3/User Guide/Configuration/NetFlow/Netflow', '00d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.3/User Guide/Configuration/NetFlow/SFlow', 'cf5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/', '4b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Advanced Custom aggr',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Advanced Custom aggr', '57d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Collectors', '34f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Email Templates', 'f80'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Fields', 'de6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Metrics', '8f7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Ranges', 'f47'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Recipients', '481'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Report schedule',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Report schedule', 'dbe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.3/User Guide/Configuration/Objects/Right click actions', 'a80'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Security/', '8d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.3/User Guide/Configuration/Security/Audit Log', 'ec1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.3/User Guide/Configuration/Security/Certificates', '056'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.3/User Guide/Configuration/Update/', '119'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.3/User Guide/Configuration/Update/About', '38a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.3/User Guide/Configuration/Update/Update', 'ab2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/',
        component: ComponentCreator('/2.3/User Guide/Dashboards/', '0f2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/', 'f91'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/Bookmarks',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/Bookmarks', 'a6b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/Dashboard',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/Dashboard', '54c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/Filters',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/Filters', 'b35'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/Macros',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/Macros', 'ae1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Favorites/Widgets',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Favorites/Widgets', '193'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Management/',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Management/', '633'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Management/Dashboards_',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Management/Dashboards_', 'd35'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Management/Report filters',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Management/Report filters', '32c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Management/Reports',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Management/Reports', '673'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Management/Widgets',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Management/Widgets', '813'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Raw Data/',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Raw Data/', '6d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Dashboards/Raw Data/Data_streams',
        component: ComponentCreator('/2.3/User Guide/Dashboards/Raw Data/Data_streams', '649'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User Guide/Playground/',
        component: ComponentCreator('/2.3/User Guide/Playground/', 'b65'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.3/User interface',
        component: ComponentCreator('/2.3/User interface', '2e9'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/2.4',
    component: ComponentCreator('/2.4', '2f7'),
    routes: [
      {
        path: '/2.4/',
        component: ComponentCreator('/2.4/', '9c9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/3rdpartylicenses',
        component: ComponentCreator('/2.4/3rdpartylicenses', '515'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/',
        component: ComponentCreator('/2.4/Examples/', '54f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Baseline Example/',
        component: ComponentCreator('/2.4/Examples/Baseline Example/', 'f11'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/2.4/Examples/Baseline Example/Using baseline in a rule', 'b7e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/2.4/Examples/Baseline Example/Using baseline in a widget', '51c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Collector - creation example',
        component: ComponentCreator('/2.4/Examples/Collector - creation example', 'f33'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Fields Examples/',
        component: ComponentCreator('/2.4/Examples/Fields Examples/', 'ce9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/2.4/Examples/Fields Examples/Fields - creation example', 'da4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/2.4/Examples/Fields Examples/Fields advanced - creation example', 'b3f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Metrics Examples/',
        component: ComponentCreator('/2.4/Examples/Metrics Examples/', '1ae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/2.4/Examples/Metrics Examples/Metrics - advance creation example', '467'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/2.4/Examples/Metrics Examples/Metrics - creation example', '124'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Rules Examples/',
        component: ComponentCreator('/2.4/Examples/Rules Examples/', 'e62'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Rules Examples/Alert rule from scratch',
        component: ComponentCreator('/2.4/Examples/Rules Examples/Alert rule from scratch', 'd93'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Rules Examples/Rule from template',
        component: ComponentCreator('/2.4/Examples/Rules Examples/Rule from template', '545'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Widgets Examples/',
        component: ComponentCreator('/2.4/Examples/Widgets Examples/', '8d8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Widgets Examples/Widget KPI Alerts last 24h',
        component: ComponentCreator('/2.4/Examples/Widgets Examples/Widget KPI Alerts last 24h', 'fe0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Examples/Widgets Examples/Widget Total Traffic 15min',
        component: ComponentCreator('/2.4/Examples/Widgets Examples/Widget Total Traffic 15min', '7b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Installation guide',
        component: ComponentCreator('/2.4/Installation guide', '1f7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/NQL/Built-in filters',
        component: ComponentCreator('/2.4/NQL/Built-in filters', '24e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/NQL/NQL documentation',
        component: ComponentCreator('/2.4/NQL/NQL documentation', '23c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/NQL/nql_cheat_sheet',
        component: ComponentCreator('/2.4/NQL/nql_cheat_sheet', 'e33'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/NQL/NQL_examples',
        component: ComponentCreator('/2.4/NQL/NQL_examples', '23f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/NQL/Searchbar',
        component: ComponentCreator('/2.4/NQL/Searchbar', '1f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Release notes',
        component: ComponentCreator('/2.4/Release notes', '1ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Requirements',
        component: ComponentCreator('/2.4/Requirements', '694'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/Sycope_Probe',
        component: ComponentCreator('/2.4/Sycope_Probe', '80f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/',
        component: ComponentCreator('/2.4/User Guide/', '56b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Alerts',
        component: ComponentCreator('/2.4/User Guide/Alerts', 'bcf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/',
        component: ComponentCreator('/2.4/User Guide/Configuration/', '893'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Account Management/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Account Management/', '88c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Account Management/Accounts',
        component: ComponentCreator('/2.4/User Guide/Configuration/Account Management/Accounts', 'b57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Account Management/Auth Providers',
        component: ComponentCreator('/2.4/User Guide/Configuration/Account Management/Auth Providers', '7b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Account Management/User Roles_',
        component: ComponentCreator('/2.4/User Guide/Configuration/Account Management/User Roles_', '648'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/', 'f32'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/Backup and Restore',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/Backup and Restore', '1db'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/Diagnostics',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/Diagnostics', 'db2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/Maintenance Mode',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/Maintenance Mode', '86c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/Notifications',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/Notifications', '7d8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/Retention',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/Retention', 'fd4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/General Settings/System Status_',
        component: ComponentCreator('/2.4/User Guide/Configuration/General Settings/System Status_', '7c3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/', '0bb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/External Destinations',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/External Destinations', 'ad4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/FTP',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/FTP', '5ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/NTP',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/NTP', '899'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/Proxy',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/Proxy', '8e8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/SMTP',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/SMTP', '824'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Integrations/SNMP',
        component: ComponentCreator('/2.4/User Guide/Configuration/Integrations/SNMP', 'ddc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Licenses',
        component: ComponentCreator('/2.4/User Guide/Configuration/Licenses', '0d2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/', 'c2f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/Business Hours',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/Business Hours', 'a23'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/Lookups',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/Lookups', '2b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/Maintenance Windows',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/Maintenance Windows', '06d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/Mappers',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/Mappers', 'a08'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Mapping/Tags',
        component: ComponentCreator('/2.4/User Guide/Configuration/Mapping/Tags', 'c96'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/NetFlow/',
        component: ComponentCreator('/2.4/User Guide/Configuration/NetFlow/', '2d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/NetFlow/Exporter Restrictions',
        component: ComponentCreator('/2.4/User Guide/Configuration/NetFlow/Exporter Restrictions', '639'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/NetFlow/Forwarding',
        component: ComponentCreator('/2.4/User Guide/Configuration/NetFlow/Forwarding', '2b7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/NetFlow/Netflow',
        component: ComponentCreator('/2.4/User Guide/Configuration/NetFlow/Netflow', '229'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/NetFlow/SFlow',
        component: ComponentCreator('/2.4/User Guide/Configuration/NetFlow/SFlow', '545'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/', '62f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Advanced Custom aggr',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Advanced Custom aggr', 'f4d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Collectors',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Collectors', '12b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Email Templates',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Email Templates', '7af'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Fields',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Fields', '1f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Metrics',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Metrics', 'c74'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Ranges',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Ranges', 'a6d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Recipients',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Recipients', '6dc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Report schedule',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Report schedule', '8e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Objects/Right click actions',
        component: ComponentCreator('/2.4/User Guide/Configuration/Objects/Right click actions', 'd97'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Security/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Security/', '08e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Security/Audit Log',
        component: ComponentCreator('/2.4/User Guide/Configuration/Security/Audit Log', 'bbb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Security/Certificates',
        component: ComponentCreator('/2.4/User Guide/Configuration/Security/Certificates', '7ff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Update/',
        component: ComponentCreator('/2.4/User Guide/Configuration/Update/', '7af'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Update/About',
        component: ComponentCreator('/2.4/User Guide/Configuration/Update/About', '6e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Configuration/Update/Update',
        component: ComponentCreator('/2.4/User Guide/Configuration/Update/Update', '9b6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Dashboards_',
        component: ComponentCreator('/2.4/User Guide/Dashboards_', 'e25'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Home',
        component: ComponentCreator('/2.4/User Guide/Home', '2f7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/',
        component: ComponentCreator('/2.4/User Guide/Management/', '7af'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Dashboards_',
        component: ComponentCreator('/2.4/User Guide/Management/Dashboards_', '141'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Favorites/',
        component: ComponentCreator('/2.4/User Guide/Management/Favorites/', '599'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Favorites/Bookmarks',
        component: ComponentCreator('/2.4/User Guide/Management/Favorites/Bookmarks', 'f8a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Favorites/Filters',
        component: ComponentCreator('/2.4/User Guide/Management/Favorites/Filters', '170'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Favorites/Macros',
        component: ComponentCreator('/2.4/User Guide/Management/Favorites/Macros', '378'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Reports/',
        component: ComponentCreator('/2.4/User Guide/Management/Reports/', 'e1b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Reports/Report filters',
        component: ComponentCreator('/2.4/User Guide/Management/Reports/Report filters', 'c4d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Reports/Reports',
        component: ComponentCreator('/2.4/User Guide/Management/Reports/Reports', '61f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Rules',
        component: ComponentCreator('/2.4/User Guide/Management/Rules', '695'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Management/Widgets',
        component: ComponentCreator('/2.4/User Guide/Management/Widgets', 'be6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Playground',
        component: ComponentCreator('/2.4/User Guide/Playground', 'b71'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User Guide/Raw Data',
        component: ComponentCreator('/2.4/User Guide/Raw Data', 'f2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/2.4/User interface',
        component: ComponentCreator('/2.4/User interface', 'a1d'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/3.0.0',
    component: ComponentCreator('/3.0.0', '3fe'),
    routes: [
      {
        path: '/3.0.0/',
        component: ComponentCreator('/3.0.0/', '6b6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/3rdpartylicenses',
        component: ComponentCreator('/3.0.0/3rdpartylicenses', '3f3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/',
        component: ComponentCreator('/3.0.0/Examples/', '48d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Asset-Discovery',
        component: ComponentCreator('/3.0.0/Examples/Asset-Discovery', '7ef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Asset-Discovery-SQL-Example',
        component: ComponentCreator('/3.0.0/Examples/Asset-Discovery-SQL-Example', 'aa0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Baseline Example/',
        component: ComponentCreator('/3.0.0/Examples/Baseline Example/', 'a2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/3.0.0/Examples/Baseline Example/Using baseline in a rule', 'd66'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/3.0.0/Examples/Baseline Example/Using baseline in a widget', '295'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Collector - creation example',
        component: ComponentCreator('/3.0.0/Examples/Collector - creation example', '68d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Create-Custom-Dashboard',
        component: ComponentCreator('/3.0.0/Examples/Create-Custom-Dashboard', 'd16'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Dashboard-Examples',
        component: ComponentCreator('/3.0.0/Examples/Dashboard-Examples', '686'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Fields Examples/',
        component: ComponentCreator('/3.0.0/Examples/Fields Examples/', 'ace'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/3.0.0/Examples/Fields Examples/Fields - creation example', '3b2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/3.0.0/Examples/Fields Examples/Fields advanced - creation example', '060'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Metrics Examples/',
        component: ComponentCreator('/3.0.0/Examples/Metrics Examples/', '274'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/3.0.0/Examples/Metrics Examples/Metrics - advance creation example', 'b89'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/3.0.0/Examples/Metrics Examples/Metrics - creation example', '08a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Rules-Examples',
        component: ComponentCreator('/3.0.0/Examples/Rules-Examples', '1ff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Rules-Examples/Advanced',
        component: ComponentCreator('/3.0.0/Examples/Rules-Examples/Advanced', '092'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Rules-Examples/Simple',
        component: ComponentCreator('/3.0.0/Examples/Rules-Examples/Simple', '353'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Widget-Example-Advanced',
        component: ComponentCreator('/3.0.0/Examples/Widget-Example-Advanced', '97d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Widget-Example-Simple',
        component: ComponentCreator('/3.0.0/Examples/Widget-Example-Simple', '421'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Examples/Widget-Examples',
        component: ComponentCreator('/3.0.0/Examples/Widget-Examples', '884'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Installation-Guide',
        component: ComponentCreator('/3.0.0/Installation-Guide', 'f23'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Installation-Guide/Deployment',
        component: ComponentCreator('/3.0.0/Installation-Guide/Deployment', '863'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Installation-Guide/Lets-Start',
        component: ComponentCreator('/3.0.0/Installation-Guide/Lets-Start', '68c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Installation-Guide/Quick-Setup',
        component: ComponentCreator('/3.0.0/Installation-Guide/Quick-Setup', '11e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Built-in-Content',
        component: ComponentCreator('/3.0.0/Introduction/Built-in-Content', 'eeb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Dashboards-and-Widgets',
        component: ComponentCreator('/3.0.0/Introduction/Dashboards-and-Widgets', '2c2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Streams',
        component: ComponentCreator('/3.0.0/Introduction/Streams', '0de'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/User-Interface',
        component: ComponentCreator('/3.0.0/Introduction/User-Interface', 'c1a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Workflows',
        component: ComponentCreator('/3.0.0/Introduction/Workflows', '687'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Workflows/Analysis',
        component: ComponentCreator('/3.0.0/Introduction/Workflows/Analysis', '052'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Workflows/Data-Selection',
        component: ComponentCreator('/3.0.0/Introduction/Workflows/Data-Selection', '75c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Introduction/Workflows/Navigation',
        component: ComponentCreator('/3.0.0/Introduction/Workflows/Navigation', 'a95'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Multitenancy',
        component: ComponentCreator('/3.0.0/Multitenancy', '7d5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/NQL/Built-in filters',
        component: ComponentCreator('/3.0.0/NQL/Built-in filters', 'b82'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/NQL/NQL documentation',
        component: ComponentCreator('/3.0.0/NQL/NQL documentation', '05b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/NQL/nql_cheat_sheet',
        component: ComponentCreator('/3.0.0/NQL/nql_cheat_sheet', '9d8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/NQL/NQL_examples',
        component: ComponentCreator('/3.0.0/NQL/NQL_examples', '2f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/NQL/Searchbar',
        component: ComponentCreator('/3.0.0/NQL/Searchbar', '059'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Release-Notes',
        component: ComponentCreator('/3.0.0/Release-Notes', '356'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Requirements',
        component: ComponentCreator('/3.0.0/Requirements', '4f1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Sycope_Probe',
        component: ComponentCreator('/3.0.0/Sycope_Probe', '503'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/Troubleshooting',
        component: ComponentCreator('/3.0.0/Troubleshooting', '808'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide',
        component: ComponentCreator('/3.0.0/User-Guide', '04d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Alerts',
        component: ComponentCreator('/3.0.0/User-Guide/Alerts', '801'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Asset-Discovery',
        component: ComponentCreator('/3.0.0/User-Guide/Asset-Discovery', 'c00'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration', '0cf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Filters',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Filters', 'e8c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Mapping/Macros',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Mapping/Macros', 'ecc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Reports',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Reports', '6e3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Reports/Recipients',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Reports/Recipients', '1e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Reports/Report-Filters',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Reports/Report-Filters', '55f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Reports/Report-Schedule',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Reports/Report-Schedule', 'ea3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Reports/Reports',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Reports/Reports', 'fc6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Rules',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Rules', 'fb2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Shortcuts',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Shortcuts', '436'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Configuration/Widgets',
        component: ComponentCreator('/3.0.0/User-Guide/Configuration/Widgets', '240'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Dashboards',
        component: ComponentCreator('/3.0.0/User-Guide/Dashboards', '9df'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Home',
        component: ComponentCreator('/3.0.0/User-Guide/Home', '6a3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Miscellaneous',
        component: ComponentCreator('/3.0.0/User-Guide/Miscellaneous', '1f8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Miscellaneous/Filters',
        component: ComponentCreator('/3.0.0/User-Guide/Miscellaneous/Filters', 'ed2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Miscellaneous/User-Interface',
        component: ComponentCreator('/3.0.0/User-Guide/Miscellaneous/User-Interface', '758'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Notifications',
        component: ComponentCreator('/3.0.0/User-Guide/Notifications', '82d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Playground',
        component: ComponentCreator('/3.0.0/User-Guide/Playground', 'efd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Quick-Analysis',
        component: ComponentCreator('/3.0.0/User-Guide/Quick-Analysis', '92f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Raw-Data',
        component: ComponentCreator('/3.0.0/User-Guide/Raw-Data', '63e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings',
        component: ComponentCreator('/3.0.0/User-Guide/Settings', '733'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration', '07c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping', '763'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping/Business-Hours',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping/Business-Hours', 'ebb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping/Lookups',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping/Lookups', '437'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows', '67c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping/Mappers',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping/Mappers', '775'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Mapping/Tags',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Mapping/Tags', 'bb7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects', '449'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Collectors',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Collectors', '46c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Column-Profiles',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Column-Profiles', '6ea'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Email-Templates',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Email-Templates', 'eb1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Fields',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Fields', '1de'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Metrics',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Metrics', 'c41'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/Ranges',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/Ranges', '526'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Objects/User-Indexes',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Objects/User-Indexes', '128'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Configuration/Quick-Setup',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Configuration/Quick-Setup', '504'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General', '034'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/About',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/About', '11f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations', '96f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/External-Destinations',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/External-Destinations', '7ab'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/FTP',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/FTP', '5f2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/NTP',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/NTP', 'b33'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/Proxy',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/Proxy', 'cf6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/SMPT',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/SMPT', '85d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Integrations/SNMP',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Integrations/SNMP', 'd2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/License',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/License', 'a4e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/General/Updates',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/General/Updates', '2e3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Indices',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Indices', 'd37'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Indices/Retention',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Indices/Retention', '02e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/IT-Asset-Discovery',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/IT-Asset-Discovery', '5fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings', '608'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules', '24b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles', 'c0c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow', '145'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations', 'ff1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/DataBridge',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/DataBridge', '31e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/Exporter-Restrictions',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/Exporter-Restrictions', 'e8b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/Forwarding',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/Forwarding', 'c77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/NetFlow',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/NetFlow', '0e5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/NetFlow/SFlow',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/NetFlow/SFlow', '4de'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security', 'ea8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security/Audit-Log',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security/Audit-Log', 'e29'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security/Authentication-Providers',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security/Authentication-Providers', '71f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security/Certificates',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security/Certificates', 'a2b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security/Roles',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security/Roles', '5df'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Security/Users',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Security/Users', '99e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Support-and-Diagnostics',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Support-and-Diagnostics', 'b72'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore', '8c7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Diagnostics',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Diagnostics', 'a17'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Remote-Support',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Support-and-Diagnostics/Remote-Support', '1e5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Settings/Support-and-Diagnostics/System-Settings',
        component: ComponentCreator('/3.0.0/User-Guide/Settings/Support-and-Diagnostics/System-Settings', 'e57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.0/User-Guide/Tips/Filtering/',
        component: ComponentCreator('/3.0.0/User-Guide/Tips/Filtering/', 'f77'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/3.0.1',
    component: ComponentCreator('/3.0.1', '8d5'),
    routes: [
      {
        path: '/3.0.1/',
        component: ComponentCreator('/3.0.1/', '169'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/3rdpartylicenses',
        component: ComponentCreator('/3.0.1/3rdpartylicenses', 'c5e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/',
        component: ComponentCreator('/3.0.1/Examples/', '80c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Asset-Discovery',
        component: ComponentCreator('/3.0.1/Examples/Asset-Discovery', '6fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Asset-Discovery-SQL-Example',
        component: ComponentCreator('/3.0.1/Examples/Asset-Discovery-SQL-Example', 'f22'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Baseline Example/',
        component: ComponentCreator('/3.0.1/Examples/Baseline Example/', 'f6e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/3.0.1/Examples/Baseline Example/Using baseline in a rule', '33e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/3.0.1/Examples/Baseline Example/Using baseline in a widget', '9d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Collector - creation example',
        component: ComponentCreator('/3.0.1/Examples/Collector - creation example', 'ea0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Create-Custom-Dashboard',
        component: ComponentCreator('/3.0.1/Examples/Create-Custom-Dashboard', 'cfe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Dashboard-Examples',
        component: ComponentCreator('/3.0.1/Examples/Dashboard-Examples', '9d4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Fields Examples/',
        component: ComponentCreator('/3.0.1/Examples/Fields Examples/', 'bec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/3.0.1/Examples/Fields Examples/Fields - creation example', '80b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/3.0.1/Examples/Fields Examples/Fields advanced - creation example', '59e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Metrics Examples/',
        component: ComponentCreator('/3.0.1/Examples/Metrics Examples/', 'e29'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/3.0.1/Examples/Metrics Examples/Metrics - advance creation example', '291'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/3.0.1/Examples/Metrics Examples/Metrics - creation example', '150'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Rules-Examples',
        component: ComponentCreator('/3.0.1/Examples/Rules-Examples', 'dcd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Rules-Examples/Advanced',
        component: ComponentCreator('/3.0.1/Examples/Rules-Examples/Advanced', 'f2f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Rules-Examples/Simple',
        component: ComponentCreator('/3.0.1/Examples/Rules-Examples/Simple', '101'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Widget-Example-Advanced',
        component: ComponentCreator('/3.0.1/Examples/Widget-Example-Advanced', '4a9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Widget-Example-Simple',
        component: ComponentCreator('/3.0.1/Examples/Widget-Example-Simple', '03b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Examples/Widget-Examples',
        component: ComponentCreator('/3.0.1/Examples/Widget-Examples', 'fb5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Installation-Guide',
        component: ComponentCreator('/3.0.1/Installation-Guide', 'fbd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Installation-Guide/Deployment',
        component: ComponentCreator('/3.0.1/Installation-Guide/Deployment', '925'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Installation-Guide/Lets-Start',
        component: ComponentCreator('/3.0.1/Installation-Guide/Lets-Start', '491'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Installation-Guide/Quick-Setup',
        component: ComponentCreator('/3.0.1/Installation-Guide/Quick-Setup', '7ff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Built-in-Content',
        component: ComponentCreator('/3.0.1/Introduction/Built-in-Content', '951'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Dashboards-and-Widgets',
        component: ComponentCreator('/3.0.1/Introduction/Dashboards-and-Widgets', '71c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Streams',
        component: ComponentCreator('/3.0.1/Introduction/Streams', '083'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/User-Interface',
        component: ComponentCreator('/3.0.1/Introduction/User-Interface', 'a92'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Workflows',
        component: ComponentCreator('/3.0.1/Introduction/Workflows', '721'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Workflows/Analysis',
        component: ComponentCreator('/3.0.1/Introduction/Workflows/Analysis', '4ce'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Workflows/Data-Selection',
        component: ComponentCreator('/3.0.1/Introduction/Workflows/Data-Selection', '721'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Introduction/Workflows/Navigation',
        component: ComponentCreator('/3.0.1/Introduction/Workflows/Navigation', '865'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Multitenancy',
        component: ComponentCreator('/3.0.1/Multitenancy', '3c7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/NQL/Built-in filters',
        component: ComponentCreator('/3.0.1/NQL/Built-in filters', '7a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/NQL/NQL documentation',
        component: ComponentCreator('/3.0.1/NQL/NQL documentation', '123'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/NQL/nql_cheat_sheet',
        component: ComponentCreator('/3.0.1/NQL/nql_cheat_sheet', '68e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/NQL/NQL_examples',
        component: ComponentCreator('/3.0.1/NQL/NQL_examples', 'be8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/NQL/Searchbar',
        component: ComponentCreator('/3.0.1/NQL/Searchbar', '27f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Release-Notes',
        component: ComponentCreator('/3.0.1/Release-Notes', '8a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Requirements',
        component: ComponentCreator('/3.0.1/Requirements', '663'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Sycope_Probe',
        component: ComponentCreator('/3.0.1/Sycope_Probe', '3c0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/Troubleshooting',
        component: ComponentCreator('/3.0.1/Troubleshooting', 'df8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide',
        component: ComponentCreator('/3.0.1/User-Guide', '593'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Alerts',
        component: ComponentCreator('/3.0.1/User-Guide/Alerts', '845'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Asset-Discovery',
        component: ComponentCreator('/3.0.1/User-Guide/Asset-Discovery', '887'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration', 'a1b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Filters',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Filters', '857'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Mapping/Macros',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Mapping/Macros', 'cda'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Reports',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Reports', 'e0e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Reports/Recipients',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Reports/Recipients', '180'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Reports/Report-Filters',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Reports/Report-Filters', '909'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Reports/Report-Schedule',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Reports/Report-Schedule', '0dd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Reports/Reports',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Reports/Reports', 'c2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Rules',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Rules', '4ce'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Shortcuts',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Shortcuts', '0f9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Configuration/Widgets',
        component: ComponentCreator('/3.0.1/User-Guide/Configuration/Widgets', '9e9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Dashboards',
        component: ComponentCreator('/3.0.1/User-Guide/Dashboards', '988'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Home',
        component: ComponentCreator('/3.0.1/User-Guide/Home', 'a6a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Miscellaneous',
        component: ComponentCreator('/3.0.1/User-Guide/Miscellaneous', '2ea'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Miscellaneous/Filters',
        component: ComponentCreator('/3.0.1/User-Guide/Miscellaneous/Filters', 'c86'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Miscellaneous/User-Interface',
        component: ComponentCreator('/3.0.1/User-Guide/Miscellaneous/User-Interface', '643'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Notifications',
        component: ComponentCreator('/3.0.1/User-Guide/Notifications', '96e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Playground',
        component: ComponentCreator('/3.0.1/User-Guide/Playground', 'e93'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Quick-Analysis',
        component: ComponentCreator('/3.0.1/User-Guide/Quick-Analysis', '05f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Raw-Data',
        component: ComponentCreator('/3.0.1/User-Guide/Raw-Data', '995'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings',
        component: ComponentCreator('/3.0.1/User-Guide/Settings', '1ee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration', '598'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping', 'cbb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping/Business-Hours',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping/Business-Hours', '3a0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping/Lookups',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping/Lookups', 'd2d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows', '86d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping/Mappers',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping/Mappers', 'c30'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Mapping/Tags',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Mapping/Tags', 'f30'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects', 'b28'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Collectors',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Collectors', '85b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Column-Profiles',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Column-Profiles', '8be'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Email-Templates',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Email-Templates', '940'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Fields',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Fields', 'f35'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Metrics',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Metrics', 'e82'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/Ranges',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/Ranges', '3f0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Objects/User-Indexes',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Objects/User-Indexes', '242'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Configuration/Quick-Setup',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Configuration/Quick-Setup', 'c32'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General', '97c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/About',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/About', '5d4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations', 'fa0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/External-Destinations',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/External-Destinations', 'bfd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/FTP',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/FTP', 'af7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/NTP',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/NTP', 'dbe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/Proxy',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/Proxy', 'd79'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/SMPT',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/SMPT', '27d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Integrations/SNMP',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Integrations/SNMP', 'c3a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/License',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/License', '6cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/General/Updates',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/General/Updates', '46d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Indices',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Indices', '83d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Indices/Retention',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Indices/Retention', '8c9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/IT-Asset-Discovery',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/IT-Asset-Discovery', '89e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings', '2f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules', '893'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles', 'd13'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow', 'e9d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations', '9f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/DataBridge',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/DataBridge', '342'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/Exporter-Restrictions',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/Exporter-Restrictions', '100'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/Forwarding',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/Forwarding', '373'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/NetFlow',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/NetFlow', '1fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/NetFlow/SFlow',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/NetFlow/SFlow', '489'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security', '9bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security/Audit-Log',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security/Audit-Log', '50c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security/Authentication-Providers',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security/Authentication-Providers', 'c99'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security/Certificates',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security/Certificates', '6eb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security/Roles',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security/Roles', '9cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Security/Users',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Security/Users', 'efa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Support-and-Diagnostics',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Support-and-Diagnostics', '893'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore', 'e54'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Diagnostics',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Diagnostics', 'b9c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Remote-Support',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Support-and-Diagnostics/Remote-Support', '005'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Settings/Support-and-Diagnostics/System-Settings',
        component: ComponentCreator('/3.0.1/User-Guide/Settings/Support-and-Diagnostics/System-Settings', 'de1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3.0.1/User-Guide/Tips/Filtering/',
        component: ComponentCreator('/3.0.1/User-Guide/Tips/Filtering/', 'b3a'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7f6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '57b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/3rdpartylicenses',
        component: ComponentCreator('/3rdpartylicenses', '9d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/API-Documentation',
        component: ComponentCreator('/API-Documentation', 'fba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/',
        component: ComponentCreator('/Examples/', '056'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Asset-Discovery',
        component: ComponentCreator('/Examples/Asset-Discovery', '3d4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Asset-Discovery-SQL-Example',
        component: ComponentCreator('/Examples/Asset-Discovery-SQL-Example', '906'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Baseline Example/',
        component: ComponentCreator('/Examples/Baseline Example/', 'a7d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Baseline Example/Using baseline in a rule',
        component: ComponentCreator('/Examples/Baseline Example/Using baseline in a rule', '827'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Baseline Example/Using baseline in a widget',
        component: ComponentCreator('/Examples/Baseline Example/Using baseline in a widget', '8ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Collector-Creation-Example',
        component: ComponentCreator('/Examples/Collector-Creation-Example', '550'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Create-Custom-Dashboard',
        component: ComponentCreator('/Examples/Create-Custom-Dashboard', '281'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Dashboard-Examples',
        component: ComponentCreator('/Examples/Dashboard-Examples', '7fa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Fields Examples/',
        component: ComponentCreator('/Examples/Fields Examples/', '92c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Fields Examples/Fields - creation example',
        component: ComponentCreator('/Examples/Fields Examples/Fields - creation example', '750'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Fields Examples/Fields advanced - creation example',
        component: ComponentCreator('/Examples/Fields Examples/Fields advanced - creation example', 'de5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Limit-Series',
        component: ComponentCreator('/Examples/Limit-Series', 'b24'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Metrics Examples/',
        component: ComponentCreator('/Examples/Metrics Examples/', '328'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Metrics Examples/Metrics - advance creation example',
        component: ComponentCreator('/Examples/Metrics Examples/Metrics - advance creation example', '9a6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Metrics Examples/Metrics - creation example',
        component: ComponentCreator('/Examples/Metrics Examples/Metrics - creation example', '243'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Pivot-Table',
        component: ComponentCreator('/Examples/Pivot-Table', '1a5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Rules-Examples',
        component: ComponentCreator('/Examples/Rules-Examples', 'c1b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Rules-Examples/Advanced',
        component: ComponentCreator('/Examples/Rules-Examples/Advanced', '57a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Rules-Examples/Simple',
        component: ComponentCreator('/Examples/Rules-Examples/Simple', '38a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Widget-Example-Advanced',
        component: ComponentCreator('/Examples/Widget-Example-Advanced', '933'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Widget-Example-Simple',
        component: ComponentCreator('/Examples/Widget-Example-Simple', 'ddb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Examples/Widget-Examples',
        component: ComponentCreator('/Examples/Widget-Examples', '015'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Installation-Guide',
        component: ComponentCreator('/Installation-Guide', '934'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Installation-Guide/Deployment',
        component: ComponentCreator('/Installation-Guide/Deployment', '3ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Installation-Guide/Lets-Start',
        component: ComponentCreator('/Installation-Guide/Lets-Start', '9d9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Installation-Guide/Quick-Setup',
        component: ComponentCreator('/Installation-Guide/Quick-Setup', '33d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Built-in-Content',
        component: ComponentCreator('/Introduction/Built-in-Content', 'a43'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Dashboards-and-Widgets',
        component: ComponentCreator('/Introduction/Dashboards-and-Widgets', 'ee0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Streams',
        component: ComponentCreator('/Introduction/Streams', '7fd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/User-Interface',
        component: ComponentCreator('/Introduction/User-Interface', '9f0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Workflows',
        component: ComponentCreator('/Introduction/Workflows', 'f60'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Workflows/Analysis',
        component: ComponentCreator('/Introduction/Workflows/Analysis', '0a7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Workflows/Data-Selection',
        component: ComponentCreator('/Introduction/Workflows/Data-Selection', '746'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Introduction/Workflows/Navigation',
        component: ComponentCreator('/Introduction/Workflows/Navigation', '22f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Multitenancy',
        component: ComponentCreator('/Multitenancy', '651'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/NQL/Built-in filters',
        component: ComponentCreator('/NQL/Built-in filters', 'a64'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/NQL/NQL documentation',
        component: ComponentCreator('/NQL/NQL documentation', '2ba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/NQL/nql_cheat_sheet',
        component: ComponentCreator('/NQL/nql_cheat_sheet', 'b71'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/NQL/NQL_examples',
        component: ComponentCreator('/NQL/NQL_examples', 'e1a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/NQL/Searchbar',
        component: ComponentCreator('/NQL/Searchbar', '65a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Release-Notes',
        component: ComponentCreator('/Release-Notes', 'ce1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Requirements',
        component: ComponentCreator('/Requirements', '0b1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Sycope_Probe',
        component: ComponentCreator('/Sycope_Probe', '764'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/Troubleshooting',
        component: ComponentCreator('/Troubleshooting', '0aa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide',
        component: ComponentCreator('/User-Guide', '9e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Alerts',
        component: ComponentCreator('/User-Guide/Alerts', '493'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Asset-Discovery',
        component: ComponentCreator('/User-Guide/Asset-Discovery', '90d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration',
        component: ComponentCreator('/User-Guide/Configuration', 'b2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Filters',
        component: ComponentCreator('/User-Guide/Configuration/Filters', 'dd1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Mapping/Macros',
        component: ComponentCreator('/User-Guide/Configuration/Mapping/Macros', 'd18'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Reports',
        component: ComponentCreator('/User-Guide/Configuration/Reports', '64e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Reports/Recipients',
        component: ComponentCreator('/User-Guide/Configuration/Reports/Recipients', 'f72'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Reports/Report-Filters',
        component: ComponentCreator('/User-Guide/Configuration/Reports/Report-Filters', '978'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Reports/Report-Schedule',
        component: ComponentCreator('/User-Guide/Configuration/Reports/Report-Schedule', 'e93'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Reports/Reports',
        component: ComponentCreator('/User-Guide/Configuration/Reports/Reports', '8a7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Rules',
        component: ComponentCreator('/User-Guide/Configuration/Rules', 'e45'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Shortcuts',
        component: ComponentCreator('/User-Guide/Configuration/Shortcuts', '72a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Configuration/Widgets',
        component: ComponentCreator('/User-Guide/Configuration/Widgets', '298'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Dashboards',
        component: ComponentCreator('/User-Guide/Dashboards', 'aae'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Home',
        component: ComponentCreator('/User-Guide/Home', '26f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Miscellaneous',
        component: ComponentCreator('/User-Guide/Miscellaneous', '4cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Miscellaneous/Filters',
        component: ComponentCreator('/User-Guide/Miscellaneous/Filters', '79c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Miscellaneous/User-Interface',
        component: ComponentCreator('/User-Guide/Miscellaneous/User-Interface', '68c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Playground',
        component: ComponentCreator('/User-Guide/Playground', '1a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Quick-Analysis',
        component: ComponentCreator('/User-Guide/Quick-Analysis', '1b1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Raw-Data',
        component: ComponentCreator('/User-Guide/Raw-Data', 'a9e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings',
        component: ComponentCreator('/User-Guide/Settings', '9b0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration',
        component: ComponentCreator('/User-Guide/Settings/Configuration', '170'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping', '152'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping/Business-Hours',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping/Business-Hours', 'dd2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping/Lookups',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping/Lookups', 'b77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping/Maintenance-Windows', '7e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping/Mappers',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping/Mappers', 'dd3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Mapping/Tags',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Mapping/Tags', 'db6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects', 'a01'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Collectors',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Collectors', '1ac'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Color-Palettes',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Color-Palettes', 'e66'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Column-Profiles',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Column-Profiles', '8ef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Email-Templates',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Email-Templates', '52c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Fields',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Fields', '62a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Metrics',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Metrics', '370'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/Ranges',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/Ranges', '3e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Objects/User-Indexes',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Objects/User-Indexes', '100'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Configuration/Quick-Setup',
        component: ComponentCreator('/User-Guide/Settings/Configuration/Quick-Setup', '400'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General',
        component: ComponentCreator('/User-Guide/Settings/General', '8fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/About',
        component: ComponentCreator('/User-Guide/Settings/General/About', '678'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations', '56e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/External-Destinations',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/External-Destinations', '704'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/FTP',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/FTP', 'e5f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/NTP',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/NTP', 'ea5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/Proxy',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/Proxy', 'a27'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/SMPT',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/SMPT', '4a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Integrations/SNMP',
        component: ComponentCreator('/User-Guide/Settings/General/Integrations/SNMP', '7f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/License',
        component: ComponentCreator('/User-Guide/Settings/General/License', '9be'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/General/Updates',
        component: ComponentCreator('/User-Guide/Settings/General/Updates', 'a8e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Indices',
        component: ComponentCreator('/User-Guide/Settings/Indices', 'efd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Indices/Retention',
        component: ComponentCreator('/User-Guide/Settings/Indices/Retention', '997'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/IT-Asset-Discovery',
        component: ComponentCreator('/User-Guide/Settings/IT-Asset-Discovery', '381'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings',
        component: ComponentCreator('/User-Guide/Settings/IT-Asset-Discovery/Asset-Discovery-Settings', '233'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules',
        component: ComponentCreator('/User-Guide/Settings/IT-Asset-Discovery/DNS-Resolver-Rules', '9b4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles',
        component: ComponentCreator('/User-Guide/Settings/IT-Asset-Discovery/Traffic-Rule-Profiles', 'd39'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow',
        component: ComponentCreator('/User-Guide/Settings/NetFlow', '0de'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/Advanced-Custom-Aggregations', '723'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/DataBridge',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/DataBridge', '983'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/Exporter-Restrictions',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/Exporter-Restrictions', 'cc1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/Forwarding',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/Forwarding', '6ea'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/General',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/General', '7c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/SFlow-and-JFlow',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/SFlow-and-JFlow', 'd8a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/NetFlow/Template-Based-Settings',
        component: ComponentCreator('/User-Guide/Settings/NetFlow/Template-Based-Settings', 'c77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security',
        component: ComponentCreator('/User-Guide/Settings/Security', '856'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security/Audit-Log',
        component: ComponentCreator('/User-Guide/Settings/Security/Audit-Log', '176'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security/Authentication-Providers',
        component: ComponentCreator('/User-Guide/Settings/Security/Authentication-Providers', '6d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security/Certificates',
        component: ComponentCreator('/User-Guide/Settings/Security/Certificates', 'aec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security/Roles',
        component: ComponentCreator('/User-Guide/Settings/Security/Roles', '383'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Security/Users',
        component: ComponentCreator('/User-Guide/Settings/Security/Users', '833'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics', '4fe'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics/Backup-and-Restore', 'fb5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics/Diagnostics',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics/Diagnostics', 'b5e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics/Notifications',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics/Notifications', '8fd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics/Remote-Support',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics/Remote-Support', '7c8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Settings/Support-and-Diagnostics/System-Status',
        component: ComponentCreator('/User-Guide/Settings/Support-and-Diagnostics/System-Status', 'e4b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/User-Guide/Tips/Filtering',
        component: ComponentCreator('/User-Guide/Tips/Filtering', '2b3'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
