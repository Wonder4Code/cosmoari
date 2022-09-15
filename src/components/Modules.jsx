import styled from "styled-components";
import {Fragment, useState} from "react";

const ModulesWrap = styled.div`
  margin-top: 60px;
  background: #efefef;
  padding: 16px 220px;

  @media (max-width: 1150px) {
    padding: 16px 100px;
  }

  @media (max-width: 900px) {
    padding: 16px 50px;
  }
`;

const ModuleTitle = styled.p`
  font-size: 20px;
  color: #333333;
  margin: 0;
  font-weight: bold;
  
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const ModuleMark = styled.span`
  color: #707070;
`;

export const Modules = () => {
  const data = [{
    subtitle: 'Модуль 1',
    title: 'Позиционирование',
    text: {
      list: ['Понимание чёткого позиционирования (кто я и как я могу помочь другим)', 'Анализ текущей точки А и построение точки Б'],
      additional: ''
    },
  },
    {
      subtitle: 'Модуль 2',
      title: 'Визуал',
      text: {
        list: [
          'Что такое визуал и зачем он нужен',
          'Краткий и понятный ник- 50% вашего успеха',
          'Шапка профиля ,как продающий помощник. Почему важно писать ее правильно',
          'Составление актуальных', 'Составление мудборда и зачем он нужен',
          'Главные пункты и составление продающей',
        ],
        additional: 'Бонус: Вечные продающие актуальные. Как их сделать и из чего они состоят.'
      },
    },
    {
      subtitle: 'Модуль 3',
      title: 'Cторис = доверие',
      text: {
        list: [
          'Как начать записывать разговорные истории',
          'как вести сторис ,чтобы привлекать клиентов',
          'Выход из зоны комфорта и первая история, которая сблизить тебя с аудиторией',
        ],
        additional: ''
      },
    },
    {
      subtitle: 'Модуль 4',
      title: 'Работа с кадрами',
      text: {
        list: [
          'Основные настройки телефона перед съемкой',
          'Приложения для обработки фото',
          'Разбор ошибок предметной съёмки',
          'Работа с искусственным и естественным светом',
          'Работа в предмете с кадром',
          'Приложения для обработки фото',
          'Где брать вдохновение',
        ],
        additional: 'Бонус: бесплатный телеграм канал с идеями, которые я буду выкладывать.'
      },
    },
  ]
  return (
      <ModulesWrap>
        <h1>Программа курса</h1>
        <hr/>
        {data.map(({subtitle, title, text}) => (
            <Fragment key={subtitle}>
              <Module subtitle={subtitle} title={title} text={text}/>
              <hr/>
            </Fragment>
        ))}
      </ModulesWrap>
  )
}

const ModuleWrap = styled.div`
  padding: 10px 0;
  max-height: ${props => props.isOpen ? '450px' : '30px'};
  overflow: hidden;
  transition: 400ms ease-in-out;
  
  @media (max-width: 500px) {
    padding: 8px 0;
  }
`;

const ModuleTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const HiddenValue = styled.div`
  overflow: hidden;
`;

const ListItem = styled.li`
  font-size: 16px;
  margin: 6px 0;
  color: #444444;
`;

const ListAdditional = styled.p`
  margin: 0 0 0 20px;
  color: #444444;
  font-size: 16px;
  font-weight: 600;
`;

const Module = ({subtitle, title, text}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <ModuleWrap isOpen={isOpen}>

        <ModuleTitleWrap onClick={() => setIsOpen(!isOpen)}>
          <ModuleTitle><ModuleMark>{subtitle}:&nbsp;</ModuleMark>{title}</ModuleTitle>
          <OpenIcon isOpen={isOpen}/>
        </ModuleTitleWrap>
        <HiddenValue>
          <ul style={{padding: '0 0 0 20px'}}>
            {text.list && text.list.map((item, index) => (
                <ListItem key={item + index}>{item}</ListItem>
            ))}
          </ul>
          {text.additional && (<ListAdditional>{text.additional}</ListAdditional>)}
        </HiddenValue>


      </ModuleWrap>
  )
}

const StyledLine = styled.div`
  width: 25px;
  border-top: 2px solid #84837d;
  margin-top: 4px;
`;

const OpenWrap = styled.div`
  position: relative;
  transform: ${({rotateAnimation}) => rotateAnimation && `rotate(-90deg)`};
  transition: 250ms ease-in-out;
`;

const OpenIcon = ({isOpen}) => {
  return (
      <OpenWrap rotateAnimation={isOpen}>
        <StyledLine/>
        <StyledLine/>
      </OpenWrap>
  )
}