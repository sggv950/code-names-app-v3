import React, {
  FormEvent,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from './common/Input';
import KeywordPreview from './KeywordPreview';
import { createGame } from '../services/gameService';

type KeyWordsListState = string[];
type KeywordsTextState = string;
type GameIdState = string;

interface KeywordsModalProps {
  onClose: () => void;
}

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 12px;
  padding: 0;
  background: none;
  border: none;
  font-size: 24px;
  outline: none;
`;

const Card = styled.div`
  width: 40vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.8);
  background-color: #fafafa;
  border-radius: 3px;
  text-align: center;
  padding: 20px;

  form {
    margin-bottom: 30px;
    button {
      cursor: pointer;
    }
  }
`;

const KeyWordPreviewContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #20303c;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const InfoText = styled.p`
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #20303c;
  margin-bottom: 20px;
`;

const WordCount = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: bold;
`;

const AddKeywordsModal = ({ onClose }: KeywordsModalProps) => {
  const keywordInput = useRef<HTMLInputElement>(null);
  const [keyWordsList, updateKeywordsList] = useState<KeyWordsListState>([]);

  useEffect(() => {
    updateKeywordText('');
    if (null !== keywordInput.current) keywordInput.current.focus();
  }, [keyWordsList]);

  const [keywordText, updateKeywordText] = useState<KeywordsTextState>('');
  const [gameId, setGameId] = useState<GameIdState>('');

  const renderKeywordPreview = (keyword: string, idx: number): ReactElement => (
    <KeywordPreview
      keyword={keyword}
      key={idx}
      onRemove={handleRemoveKeyword}
    />
  );

  const handleRemoveKeyword = (removedKeyword: string) => {
    const updatedKeywords = keyWordsList.filter(
      keyword => keyword !== removedKeyword,
    );
    updateKeywordsList(updatedKeywords);
  };

  const addKeyword = (keyword: string) => {
    if (keyword.trim().length === 0 || keyWordsList.length === 25) return;
    if (keyWordsList.find(k => k === keyword.trim())) return;

    const updatedKeywords = [...keyWordsList, keyword.trim()];
    updateKeywordsList(updatedKeywords);
  };

  const handleClickClose = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);
    onClose();
  };

  const onInputChange = (e: FormEvent) => {
    e.persist();
    updateKeywordText((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addKeyword(keywordText);
  };

  const handleCreateNewGame = async () => {
    let gameId;
    if (keyWordsList.length === 25) {
      gameId = await createGame(keyWordsList);
    } else {
      gameId = await createGame();
    }
    // setGameId(gameId);
    console.log(gameId);
    //PROGRAMATICLY ROUTE
  };

  return (
    <Modal>
      <Card>
        <CloseModalButton onClick={handleClickClose}>&times;</CloseModalButton>
        <InfoText>Add 25 keywords for custom game.</InfoText>
        <form onSubmit={handleSubmit}>
          <Input
            value={keywordText}
            onChange={onInputChange}
            ref={keywordInput}
          />
          <button type="submit">Add</button>
        </form>
        {!!keyWordsList.length && (
          <KeyWordPreviewContainer>
            {keyWordsList.map((keyword, idx) =>
              renderKeywordPreview(keyword, idx),
            )}
          </KeyWordPreviewContainer>
        )}
        {keyWordsList.length === 25 && (
          <Link to={`/game/${gameId}`}>
            <button onClick={handleCreateNewGame}>Submit</button>
          </Link>
        )}
        OR
        <div>
          <Link to={`/game/${gameId}`}>Generate Keywords Randomly</Link>
        </div>
        <WordCount>words: {keyWordsList.length}/25</WordCount>
      </Card>
    </Modal>
  );
};

export default AddKeywordsModal;
