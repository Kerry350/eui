/// <reference path="../common.d.ts" />

import { SFC, SVGAttributes } from 'react';

declare module '@elastic/eui' {
  /**
   * icon type defs
   *
   * @see './icon.js'
   */

  export type IconType =
    | 'addDataApp'
    | 'advancedSettingsApp'
    | 'alert'
    | 'apmApp'
    | 'apps'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowUp'
    | 'asterisk'
    | 'bolt'
    | 'boxesHorizontal'
    | 'boxesVertical'
    | 'broom'
    | 'brush'
    | 'bullseye'
    | 'calendar'
    | 'check'
    | 'checkInCircleFilled'
    | 'clock'
    | 'compute'
    | 'console'
    | 'consoleApp'
    | 'controlsHorizontal'
    | 'controlsVertical'
    | 'copy'
    | 'copyClipboard'
    | 'cross'
    | 'dashboardApp'
    | 'devToolsApp'
    | 'discoverApp'
    | 'document'
    | 'dot'
    | 'editorAlignCenter'
    | 'editorAlignLeft'
    | 'editorAlignRight'
    | 'editorBold'
    | 'editorCodeBlock'
    | 'editorComment'
    | 'editorHeading'
    | 'editorItalic'
    | 'editorLink'
    | 'editorStrike'
    | 'editorTable'
    | 'editorUnderline'
    | 'editorOrderedList'
    | 'editorUnorderedList'
    | 'empty'
    | 'exit'
    | 'expand'
    | 'faceHappy'
    | 'faceNeutral'
    | 'faceSad'
    | 'fullScreen'
    | 'gear'
    | 'graphApp'
    | 'grid'
    | 'grokApp'
    | 'help'
    | 'iInCircle'
    | 'indexClose'
    | 'indexEdit'
    | 'indexFlush'
    | 'indexMapping'
    | 'indexOpen'
    | 'indexSettings'
    | 'indexPatternApp'
    | 'inputOutput'
    | 'invert'
    | 'link'
    | 'list'
    | 'listAdd'
    | 'lock'
    | 'loggingApp'
    | 'logoApache'
    | 'logoBeats'
    | 'logoCloud'
    | 'logoElastic'
    | 'logoElasticSearch'
    | 'logoElasticStack'
    | 'logoGmail'
    | 'logoKibana'
    | 'logoLogstash'
    | 'logoMySQL'
    | 'logoNginx'
    | 'logoSlack'
    | 'logoWebhook'
    | 'logoXpack'
    | 'machineLearningApp'
    | 'managementApp'
    | 'mapMarker'
    | 'memory'
    | 'merge'
    | 'minusInCircle'
    | 'monitoringApp'
    | 'node'
    | 'number'
    | 'pause'
    | 'pencil'
    | 'pin'
    | 'pipelineApp'
    | 'play'
    | 'plusInCircle'
    | 'popout'
    | 'questionInCircle'
    | 'refresh'
    | 'reportingApp'
    | 'savedObjectsApp'
    | 'scale'
    | 'search'
    | 'searchProfilerApp'
    | 'securityApp'
    | 'shard'
    | 'share'
    | 'sortDown'
    | 'sortLeft'
    | 'sortRight'
    | 'sortUp'
    | 'starEmpty'
    | 'starPlusFilled'
    | 'stats'
    | 'stop'
    | 'stopFilled'
    | 'storage'
    | 'string'
    | 'temperature'
    | 'tableOfContents'
    | 'tear'
    | 'timelionApp'
    | 'trash'
    | 'upgradeAssistantApp'
    | 'user'
    | 'usersRolesApp'
    | 'visualizeApp'
    | 'watchesApp'
    | 'wrench';

  export type IconSize = 'original' | 's' | 'm' | 'l' | 'xl' | 'xxl';

  export type IconColor =
    | 'accent'
    | 'danger'
    | 'default'
    | 'ghost'
    | 'primary'
    | 'secondary'
    | 'subdued'
    | 'success'
    | 'text'
    | 'warning';

  export interface EuiIconProps {
    type?: IconType;
    color?: IconColor;
    size?: IconSize;
  }

  export const EuiIcon: SFC<
    CommonProps & SVGAttributes<SVGAElement> & EuiIconProps
  >;
}
