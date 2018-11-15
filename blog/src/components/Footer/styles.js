import { css } from 'emotion';

const footer = css`
  h3 {
    padding: 10px 0;
    color: #444f60;
    font-family: Nexa Bold,sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0!important;
    text-transform: uppercase;
  }

  ul {
    font-size: 1rem;
    line-height: 30px;

    li {
      a {
        color: #98a9c3;
        font-weight: 400;
        transition: all .5s;
      }
    }
  }
`;

// const footer = css`
//   display: flex;
//   flex-direction: column;
//   font-size: 0.9em;
//   margin: 20px 0;

//   .links ul {
//     list-style: none;
//     color: var(--textColor);
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     line-height: 1.1;
//   }

//   .links a {
//     text-decoration: none;
//     color: var(--textColor);
//     font-weight: bold;
//   }

//   .links li {
//     text-align: center;
//     margin: 2px 10px;
//     position: relative;
//   }

//   .copyright {
//     font-size: 0.9em;
//     color: var(--lightTextColor);
//     text-align: center;
//     margin: 10px 0 30px;
//   }

//   .credits {
//     font-size: 0.8em;
//     color: var(--superLightTextColor);
//     margin: 20px 0 0;
//     text-align: center;

//     & a {
//       text-decoration: none;
//       color: var(--lightTextColor);
//     }
//   }
// `;

export default footer;
