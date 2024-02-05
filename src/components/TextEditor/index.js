import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'
import {
  AppBgContainer,
  AppContentContainer,
  AppLogoContainer,
  TextEditorHeading,
  TextEditorImage,
  TextEditorContainer,
  ButtonContainer,
  Button,
  Textarea,
} from '../styledComponent'

class TextEditor extends Component {
  state = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  onChangeText = e => {
    this.setState({
      text: e.target.value,
    })
  }

  renderAppNameField = () => (
    <AppLogoContainer>
      <TextEditorHeading>Text Editor</TextEditorHeading>
      <TextEditorImage
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        alt="text editor"
      />
    </AppLogoContainer>
  )

  renderButtons = () => {
    const {bold, italic, underline} = this.state

    return (
      <ButtonContainer>
        <li>
          <Button
            active={bold}
            type="button"
            data-testid="bold"
            onClick={this.onClickBold}
          >
            <VscBold />
          </Button>
        </li>
        <li>
          <Button
            active={italic}
            type="button"
            data-testid="italic"
            onClick={this.onClickItalic}
          >
            <GoItalic />
          </Button>
        </li>
        <li>
          <Button
            active={underline}
            type="button"
            data-testid="underline"
            onClick={this.onClickUnderline}
          >
            <AiOutlineUnderline />
          </Button>
        </li>
      </ButtonContainer>
    )
  }

  renderTextAreaField = () => {
    const {text, bold, italic, underline} = this.state
    const boldText = bold ? 'bold' : ''
    const italicText = italic ? 'italic' : ''
    const underlineText = underline ? 'underline' : ''

    return (
      <Textarea
        bold={bold}
        italic={italic}
        underline={underline}
        value={text}
        onChange={this.onChangeText}
        className={`${boldText} ${italicText} ${underlineText}`}
        rows="25"
        cols="35"
      />
    )
  }

  render() {
    return (
      <AppBgContainer>
        <AppContentContainer>
          {this.renderAppNameField()}
          <TextEditorContainer>
            {this.renderButtons()}
            {this.renderTextAreaField()}
          </TextEditorContainer>
        </AppContentContainer>
      </AppBgContainer>
    )
  }
}

export default TextEditor
