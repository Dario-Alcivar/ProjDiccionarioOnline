import axios from 'axios';

const TranslateController = async (text, sourceLanguage, targetLanguage) => {
  const response = await axios.post('https://es.libretranslate.com/translate', {
    q: text,
    source: sourceLanguage,
    target: targetLanguage,
  });

  return response.data.translatedText
};

export default TranslateController;