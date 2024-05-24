import styled from "styled-components";

export const GitHubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  gap: 2px;

  @media (max-width: 768px){
    flex-wrap: wrap;
  }

  img{
    height: 200px;
  }
`
