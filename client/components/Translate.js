import React from 'react';
import { connect } from 'react-redux';
import { getTranslation } from '../store/translate';

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translate: '',
      language: 'zh-CN',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  // sets state.translate to form input
  handleInputChange(event) {
    const value = event.target.value;

    this.setState({
      translate: value,
    });
  }

  // sets state.language to select menu value
  selectLanguage(event) {
    this.setState({
      language: event.target.value,
    });
  }

  // sends POJO payload to thunk
  handleSubmit(event) {
    event.preventDefault();

    const textToTranslate = {
      q: this.state.translate,
      source: 'en',
      target: this.state.language,
      format: 'text',
    };

    this.props.sendTranslate(textToTranslate);
  }

  render() {
    return (
      <div className="flex-container">
        <div className="flex-item">
          <h3>How do I say?</h3>
          <form onSubmit={this.handleSubmit}>
            <textarea
              name="translate"
              rows="20"
              cols="50"
              placeholder="What do you want to translate?"
              value={this.state.translate}
              onChange={this.handleInputChange}
            ></textarea>
            <br />
            <label onClick={this.selectLanguage}>
              Select the language to translate to:
              <select>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="km">Khmer</option>
                <option value="ko">Korean</option>
                <option value="lo">Lao</option>
                <option value="pa">Punjabi</option>
                <option value="es">Spanish</option>
                <option value="ta">Tamil</option>
                <option value="vi">Vietnamese</option>
              </select>
            </label>
            <br />
            <button type="submit" variant="contained" color="primary">
              Translate Now!
            </button>
          </form>
        </div>
        <div className="flex-item">
          <h3>Here's how to say it!</h3>
          <form>
            <textarea
              name="translatedText"
              rows="20"
              cols="50"
              placeholder="Your translated text will appear here!"
              defaultValue={this.props.translatedText}
            ></textarea>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    translatedText: state.translate.translate,
  };
};

const mapDispatch = (dispatch) => {
  return {
    sendTranslate: (textToTranslate) =>
      dispatch(getTranslation(textToTranslate)),
  };
};

export default connect(mapState, mapDispatch)(Translate);
