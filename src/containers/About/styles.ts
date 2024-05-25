import styled from "styled-components";

export const GitHubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  gap: 2px;

  @media (max-width: 768px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  img{
    height: 190px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;

    @media (max-width: 768px){
      height: 130px;
    }
  }
`
