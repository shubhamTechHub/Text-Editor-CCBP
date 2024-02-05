import styled from 'styled-components'

export const AppBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`

export const AppContentContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  padding: 10px;
`

export const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const TextEditorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #f8fafc;
`

export const TextEditorImage = styled.img`
  width: 235px;
  margin: auto;
`

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #334155;
  border-radius: 4px;
  background-color: #25262c;
`

export const ButtonContainer = styled.ul`
  display: flex;
  border-bottom: 1px solid #334155;
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const Textarea = styled.textarea`
  background-color: transparent;
  color: #f1f5f9;
  padding: 10px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  outline: none;
  border: none;
`
