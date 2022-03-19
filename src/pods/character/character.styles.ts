import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const content = css`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const info = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const list = css`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const textArea = css`
  width: 100%;
  height: 50px;
`;

export const button = css`
  background: #3f51b5;
  color: white;
  font-weight: bold;

  :hover {
    color: #3f51b5;
  }
`;
