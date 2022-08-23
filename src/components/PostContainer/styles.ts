import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 15px 15px 8px 8px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  min-width: 40vw;
  max-width: 95vw;
  min-height: 60vh;
  max-height: 60vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`
export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondBackground};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 5px;
`
