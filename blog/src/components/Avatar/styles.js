import { css } from 'emotion';

const avatar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .mcard-avatar img {
      height: 40px;
      width: 40px;
      border-radius: 250px;
  }
  
  .mcard-info {
      margin-left: 15px;
      span {
          font-size: 14px;
          line-height: 1.4;
      }
      div span {
          font-size: 12px;
          line-height: 1.2;
          color: $title-grey;
      }
      div i {
          font-size: 4px;
          position: relative;
          color: $muted-grey;
          top: -2px;
          margin: 0 5px;
      }
  }
  .mcard-actions {
      i {
          position: relative;
          top: 5px;
          color: $title-grey;
          cursor: pointer;
          &:hover {
              color: $accent;
          }
      }
  }
`;

// const avatar = css`
//   max-width: 600px;
//   margin: 0 auto 30px;
// `;

export default avatar;