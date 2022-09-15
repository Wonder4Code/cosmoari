import styled, {keyframes} from "styled-components";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px 16px;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 16px;
  outline: none;
  transition: 400ms ease-in-out;
  border: none;
  box-shadow: 0 5px 10px 4px lightgray;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
  }
`;

const FormWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const QuestionTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
`;

const StyledArea = styled.textarea`
  width: 100%;
  font-size: 20px;
  padding: 12px 16px;
  resize: none;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 5px 10px 4px lightgray;
  border: none;
  box-sizing: border-box;

  &::placeholder {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
`;

const AreaWrap = styled.div`
  width: 50%;
  margin-top: 32px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #a3a3a3;
  margin: 0 0 10px 0;
`;

const StyledButton = styled.button`
  background: #84837d;
  font-size: 20px;
  border: none;
  color: #ffffff;
  padding: 20px 50px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: 32px;

  &:hover {
    background: #999890;
  }

  &:active {
    background: #84837d;
  }
`;

const popUpAnimation = keyframes`
  0% {
    left: -400px;
  }
  80% {
    left: 50%;
  }
  100% {
    left: 40%;
  }
`;

const popUpAnimationMobile = keyframes`
  0% {
    left: -300px;
  }
  80% {
    left: 20%;
  }
  100% {
    left: 10%;
  }
`;

const StyledPopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  bottom: 50%;
  left: 40%;
  animation: ${popUpAnimation} 1s ease-in-out;

  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 4px lightgray;

  @media (max-width: 500px) {
    left: 0;
    width: 250px;
    padding: 0 8px;
    box-sizing: border-box;
    animation: ${popUpAnimationMobile} 1s ease-in-out;
  }
`;

const StyledPopUpWrap = styled.div`
  bottom: 50%;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Form = () => {
  const [name, setName] = useState('')
  const [instagram, setInstagram] = useState('')
  const [sphere, setSphere] = useState('')
  const [problems, setProblems] = useState('')
  const [courses, setCourses] = useState('')
  const [result, setResult] = useState('')
  const [notification, setNotification] = useState(false)
  const [error, setError] = useState(false)


  const formHandler = async (event) => {
    event.preventDefault()
    const data = {
      name,
      instagram,
      sphere,
      problems,
      courses,
      result
    }

    if (!(name && instagram && sphere && problems && courses && result)) return setError(true)
    axios.post('https://cosmoari.herokuapp.com/sheets', data).then(data => console.log(data))
    setNotification(true)
    setName('')
    setInstagram('')
    setSphere('')
    setProblems('')
    setCourses('')
    setResult('')
    setError(false)
  }

  return (
      <FormWrap>
        {error && (
            <StyledPopUpWrap>
              <StyledPopUp onClick={() => setError(false)}>
                <h2>Поля не заполнены</h2>
                <p>Заполните все поля</p>
              </StyledPopUp>
            </StyledPopUpWrap>
        )}
        {notification && (
            <StyledPopUpWrap>
              <StyledPopUp onClick={() => setNotification(false)}>
              <h2>Анкета успешно отправлена</h2>
              <p>До встречи на куре!🤩</p>
              </StyledPopUp>
            </StyledPopUpWrap>
        )}

        <Title>Предзапись на курс</Title>
        <StyledForm onSubmit={formHandler}>
          <AreaWrap>
            <QuestionTitle>Как тебя зовут?</QuestionTitle>
            <StyledInput type="text" placeholder={'Введите текст...'} value={name}
                         onChange={(e) => setName(e.target.value)}/>
          </AreaWrap>
          <AreaWrap>
            <QuestionTitle>Прикрепи ссылку на свой Instagram?</QuestionTitle>
            <StyledInput type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)}
                         placeholder={'Введите текст...'}/>
          </AreaWrap>
          <AreaWrap>
            <QuestionTitle>В какой бьюти сфере работаешь?</QuestionTitle>
            <TextArea value={sphere} setValue={setSphere} placeholder={'Введите текст...'}/>
          </AreaWrap>
          <AreaWrap>
            <QuestionTitle>Что у тебя не получается?</QuestionTitle>
            <TextArea value={problems} setValue={setProblems} placeholder={'Введите текст...'}/>
          </AreaWrap>
          <AreaWrap>
            <QuestionTitle>Проходил(а) ли ты курсы по продвижению и оформлению визуала?</QuestionTitle>
            <SubTitle>Если да,то перечисли что понравилось и не понравилось</SubTitle>
            <TextArea value={courses} setValue={setCourses} placeholder={'Введите текст...'}/>
          </AreaWrap>
          <AreaWrap>
            <QuestionTitle>Какой результат ты хочешь получить и за какое время?</QuestionTitle>
            <TextArea value={result} setValue={setResult} placeholder={'Введите текст...'}/>
          </AreaWrap>
          <StyledButton type={"submit"}>Отправить анкету</StyledButton>
        </StyledForm>
      </FormWrap>
  )
}

const TextArea = ({value, setValue, placeholder, drop}) => {
  const area = useRef(null)
  const handler = (event) => {
    if (drop) setValue('')
    setValue(event.target.value)
  }

  useEffect(() => {
    area.current.style.height = "80px";
    const scrollHeight = area.current.scrollHeight;
    area.current.style.height = scrollHeight + "px";
  }, [value])
  return (
      <StyledArea id="sphere" ref={area} value={value} onChange={handler} placeholder={placeholder}></StyledArea>
  )
}