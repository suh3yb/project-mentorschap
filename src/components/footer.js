import React, { useState } from 'react';
import styled from 'styled-components';

import Head from '../components/head';

export default () => {
  const [hover, toggleHover] = useState(null);

  return (
    <>
      <Head />
      <Container>
        <Wrapper>
          <Section>
            <Title>Recente Berichten</Title>
            <List>
              <ListItemFirst>
                <Anchor href="#!">Vacature coördinator</Anchor>
                <Span>5 november 2019</Span>
              </ListItemFirst>
              <ListItem>
                <Anchor href="#!">Wij zijn verhuisd</Anchor>
                <Span>6 februari 2019</Span>
              </ListItem>
              <ListItem>
                <Anchor href="#!">
                  Help ons als bestuurslid meer kwetsbare Amsterdammers te helpen!
                </Anchor>
                <Span>22 november 2018</Span>
              </ListItem>
              <ListItem>
                <Anchor href="#!">Belangrijke wijziging binnen SMA</Anchor>
                <Span>11 oktober 2018</Span>
              </ListItem>
            </List>
          </Section>
          <Section>
            <Title>Maak Het Verschil</Title>
            <P>
              Als weldenkende Amsterdammer ben je nodig om op kwalitatieve manier iemand net wat
              sterker te laten zijn.
            </P>
            <P>
              Wil je je kwaliteiten inzetten, ben je flexibel inzetbaar tot zo'n 8 uur per maand?
              Klik op mentor worden.
            </P>
          </Section>
          <Section>
            <Title>Contact</Title>
            <P>
              Stichting Mentorschap Amsterdam
              <br />
              Nieuwe Herengracht 49
              <br />
              1011 RN Amsterdam
            </P>
            <P>
              T: 085 4874 085 <br />
              F: 084 8740134 <br />
              E:{' '}
              <MailAnchor href="mailto:bureau@mentorschapamsterdam.nl">
                bureau@mentorschapamsterdam.nl
              </MailAnchor>
            </P>
          </Section>
          <Section>
            <Title>Volg Ons</Title>
            <FlexRowDiv>
              <SocialLink
                href="#!"
                onMouseEnter={() => toggleHover('facebook')}
                onMouseLeave={() => toggleHover(null)}
              >
                <i className="fab fa-facebook-f"></i>
                <span className={hover === 'facebook' ? 'show' : ''}>Facebook</span>
              </SocialLink>
              <SocialLink
                href="#!"
                onMouseEnter={() => toggleHover('twitter')}
                onMouseLeave={() => toggleHover(null)}
              >
                <i className="fab fa-twitter"></i>
                <span className={hover === 'twitter' ? 'show' : ''}>Twitter</span>
              </SocialLink>
              <SocialLink
                href="#!"
                onMouseEnter={() => toggleHover('linkedin')}
                onMouseLeave={() => toggleHover(null)}
              >
                <i className="fab fa-linkedin-in"></i>
                <span className={hover === 'linkedin' ? 'show' : ''}>LinkedIn</span>
              </SocialLink>
            </FlexRowDiv>
            <Title>Nieuwsbrief</Title>
            <form>
              <Input type="email" placeholder="email address" required={true} />
              <SubmitButton type="submit" value="Subscribe" />
            </form>
          </Section>
        </Wrapper>
      </Container>
      <BottomPart>
        <a href="#!">Disclaimer</a> | <a href="#!">Privacy</a> | <a href="#!">Over deze website</a>
      </BottomPart>
      <ToTop href="#!" />
    </>
  );
};

const Container = styled.div`
  background: #2e2e2e;
  width: calc(100% - 60px);
  padding: 43px 30px 40px;
`;

const Wrapper = styled.footer`
  background: #2e2e2e;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #cccccc;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(25% - 30px);

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 28px;
  font-family: 'PT Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #777777;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #505152;
  padding: 10px 10px 12px;
`;

const ListItemFirst = styled(ListItem)`
  padding-top: 0;
`;

const Anchor = styled.a`
  color: #f28324;
  text-decoration: none;
  display: block;
  font-size: 13px;
  transition: all 0.2s linear;

  &::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 9px;
    content: '\f054';
    position: absolute;
    margin-left: -12px;
    margin-top: 3px;
  }

  &:hover {
    color: #ffffff;
  }
`;

const MailAnchor = styled(Anchor)`
  display: inline;

  &::before {
    content: '';
  }
`;

const Span = styled.span`
  display: block;
  color: #cccccc;
  font-size: 12px;
`;

const P = styled.p`
  margin-top: 0;
`;

const FlexRowDiv = styled.div`
  display: flex;
  margin-bottom: 35px;
`;

const SocialLink = styled.a`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 5.5px 14px;
  color: #cccccc;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s linear;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  span {
    opacity: 0;
    transition: all 0.2s ease-in;
    width: 60px;
    text-align: center;
    position: absolute;
    bottom: 130%;
    left: 30%;
    margin-left: -30px;
    font-size: 12px;
    padding: 2px 3px;
    background: #000000;
    border-radius: 5px;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  .show {
    opacity: 0.8;
  }
`;

const Input = styled.input`
  font-family: 'Open Sans', 'Helvetica Neue', Arial, Helvetica, Verdana, sans-serif;
  font-size: 15px;
  display: block;
  min-height: 32px;
  padding: 0 0.4em;
  margin: 0 4% 10px 0;
  width: 58%;
  min-width: 130px;
  border: 1px solid #999;
  border-radius: 3px;

  &::placeholder {
    color: #aaa9a9;
  }
`;

const SubmitButton = styled(Input)`
  min-width: 90px;
  width: 35%;
  background: #f28324;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.23s ease-in-out 0s;

  &:hover {
    background: #f49724;
  }
`;

const BottomPart = styled.div`
  background: #282a2b;
  border-top: 1px solid #4b4c4d;
  padding: 18px 30px 16px;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #555555;
  text-align: center;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const ToTop = styled.a`
  background-color: #333;
  text-align: center;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  right: 75px;
  height: 35px;
  width: 48px;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  opacity: 0.9;
  z-index: 999;
  transition: all 0.2s ease-in-out 0s;

  &::before {
    font-family: 'Font Awesome 5 Free';
    content: '\f077';
    line-height: 35px;
    font-weight: 900;
    font-size: 14px;
    color: #ffffff;
  }

  &:hover {
    background-color: #e0771e;
  }

  @media (max-width: 500px) {
    right: 30px;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
