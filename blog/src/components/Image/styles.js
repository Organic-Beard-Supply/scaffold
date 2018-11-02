import { css } from 'emotion';

const image = css`
  width: 100%;
  height: 300px;
  max-width: 100%;
  position: relative;
  margin-bottom: -5%;
  text-align: center;
  background-size: cover;
  background-position: center;
  margin: 0;

  .top-slant {
    top: 0;
        border-right: 1500px solid transparent;
        border-top: 60px solid white;
        border-left: 0px solid transparent;position: absolute;
        height: 60px;
        width: 100%;
        left: 0;
  }

  .bottom-slant {
    bottom: 0;
        border-right: 0px solid transparent;
        border-bottom: 60px solid white;
        border-left: 1500px solid transparent;position: absolute;
        height: 60px;
        width: 100%;
        left: 0;
  }
`

export default image;