import { css } from 'emotion';
import { colors, padding } from '../../styles/variables'

import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
      
const section = css`
  padding: ${padding.sectionPadding};

  &.is-medium {
    ${mq({
      padding: [padding.sectionPadding, padding.sectionPaddingMedium]
    })};
  }

  &.is-large {
    ${mq({
      padding: [padding.sectionPadding, padding.sectionPaddingLarge]
    })};
  }

  &.section-light-grey {
    background-color: ${colors.lightGrey};
  }
  &.section-feature-grey {
      background-color: ${colors.sectionGrey};
  }
  &.section-feature-white {
      background-color: ${colors.white};
  }
  &.section-header-grey {
      background-color: ${colors.headerGrey};
  }
  &.section-feature-grey-accent {
      background-color: ${colors.sectionGreyAccent};
  }
  &.section-primary {
    background-color: ${colors.sectionGreyAccent};
    background-color: ${colors.primary};
  }
  &.section-secondary {
      background-color: ${colors.secondary};
  }
  //Bordered sections
  &.has-border-bottom {
      border-bottom: 1px solid ${colors.fadeGrey};
  }
  &.has-border-top {
      border-top: 1px solid ${colors.fadeGrey};
  }
  //Helpers
  &.no-margin {
      margin: 0 !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
  }

  //Slanted section
  &.is-skewed-sm {
      transform: skew(0deg,-3deg) translate(0,-45px);
      padding-top: 140px;
  }
  
  //Reverse slant on container
  .container {
    padding-right: 15px;
    background: ${colors.white};
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    z-index: 1;

      &.is-reverse-skewed-sm {
          transform: skew(0deg,3deg) translate(0,45px);
      }
      &.slanted-container {
          margin-top: -100px;
      }
  }
`;

export default section;
