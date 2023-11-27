/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Avatar,
  AvatarColorScheme,
  Badge,
  Button,
  ButtonDesign,
  Card,
  CardHeader,
  FlexBox,
  FlexBoxDirection,
  Icon,
  List,
  ListItemType,
  ListSeparators,
  RatingIndicator,
  ShellBar,
  ShellBarItem,
  StandardListItem,
  Text
} from '@ui5/webcomponents-react';

import { useStyles } from './Home.jss';
import useTestStore from '../../store/useTestStore';
import { useTestMutation } from '../../hooks/useTestMutation';
import { useTestQuery } from '../../hooks/useTestQuery';
import { useIsMutating } from 'react-query';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CardTagsEnum } from '../../enums/CardTagsEnum';

export const Home: React.FC = () => {
  const { testNumber, testSetNumber } = useTestStore();
  const classes = useStyles();

  const { data, refetch, isLoading, isFetching, isRefetching } = useTestQuery({
    testParam: 'teste'
  });

  const testMutation = useTestMutation();
  const isMutating = useIsMutating({ mutationKey: 'testMutation' });

  const callMutation = () => {
    if (isMutating === 0) {
      testMutation
        .mutateAsync({
          testData: 'teste'
        })
        .then((result) => {
          console.log(result.data);
        });
    } else {
      return Promise.reject(new Error("Mutation 'testMutation' already in progress."));
    }
  };

  useEffect(() => {
    testSetNumber(testNumber + 1);
  }, []);

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <ShellBar
        logo={
          <img
            alt="UniFood Logo"
            src="https://static-00.iconduck.com/assets.00/fork-and-knife-with-plate-emoji-2048x2048-4e58vsav.png"
          />
        }
        primaryTitle="UniFood"
        profile={<Avatar colorScheme={AvatarColorScheme.Accent6} initials="TH"></Avatar>}
      >
        <ShellBarItem icon="visits" text="Entrar" onClick={function Ta() {}} />
        <ShellBarItem icon="add-employee" text="Cadastrar-se" />
      </ShellBar>

      <FlexBox direction={FlexBoxDirection.Row} className={classes.firstSection}>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.mainContainer}>
          <Text className={classes.firstSectionMainText}>
            Compartilhe suas experiências gastronômicas em restaurantes universitários!
          </Text>
          <Text className={classes.firstSectionSecondaryText}>
            Sua opinião importa! Junte-se a nós e ajude a transformar a experiência gastronômica
            estudantil nas universidades brasileiras.
          </Text>
          <FlexBox direction={FlexBoxDirection.Row} className={classes.buttonsFlexBox}>
            <Button design={ButtonDesign.Emphasized} className={classes.newReviewButton}>
              Deixar Avaliação
            </Button>
            <Button design={ButtonDesign.Default} className={classes.searchReviewsButton}>
              Pesquisar Avaliações
            </Button>
          </FlexBox>
        </FlexBox>

        <FlexBox className={classes.secondaryContainer}>
          <Card
            className={classes.reviewCard}
            header={
              <CardHeader
                avatar={<Icon name="official-service" />}
                titleText="RU1 - UFRGS"
                subtitleText="Porto Alegre, Rio Grande do Sul"
              />
            }
          >
            <List separators={ListSeparators.None}>
              <StandardListItem type={ListItemType.Inactive}>
                <RatingIndicator readonly value={4} className={classes.reviewCardStars} />
              </StandardListItem>
              <StandardListItem
                type={ListItemType.Inactive}
                style={{ height: 'auto', marginTop: '20px' }}
              >
                <h4>Comentários</h4>
                <p className={classes.reviewCardComments}>
                  Recomendo o Restaurante Universitário! A comida era deliciosa e bem preparada, com
                  opções vegetarianas e saudáveis. O atendimento foi amigável e o ambiente era
                  espaçoso e limpo.
                </p>
              </StandardListItem>
              <StandardListItem
                type={ListItemType.Inactive}
                style={{ height: 'auto', marginTop: '20px' }}
              >
                <h4>Tags</h4>
                <FlexBox className={classes.badgesList}>
                  <Badge className={classes.badge} colorScheme={CardTagsEnum.Positive}>
                    Fila curta
                  </Badge>
                  <Badge className={classes.badge} colorScheme={CardTagsEnum.Neutral}>
                    Sem guardanapos
                  </Badge>
                  <Badge className={classes.badge} colorScheme={CardTagsEnum.Negative}>
                    Sem opção vegetariana
                  </Badge>
                  <Badge className={classes.badge} colorScheme={CardTagsEnum.Positive}>
                    Boa variedade
                  </Badge>
                  <Badge className={classes.badge} colorScheme={CardTagsEnum.Positive}>
                    Limpeza
                  </Badge>
                </FlexBox>
              </StandardListItem>
            </List>
          </Card>
        </FlexBox>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Column} className={classes.secondSection}>
        <Text className={classes.secondSectionMainText}>
          Veja as avaliações dos RUs mais frequentados!
        </Text>
        <Text className={classes.secondSectionSecondaryText}>
          Veja a média das avaliações deixadas por outros estudantes.
        </Text>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Column} className={classes.thirdSection}>
        <Text className={classes.secondSectionMainText}>
          Leia avaliações reais de estudantes como você
        </Text>
        <Text className={classes.secondSectionSecondaryText}>
          Descubra as experiências mais recentes dos estudantes nos RUs.
        </Text>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Column} className={classes.fourthSection}>
        <FlexBox direction={FlexBoxDirection.Column} className={classes.fourthSectionMainContainer}>
          <Badge
            colorScheme={CardTagsEnum.Positive}
            style={{ padding: '5px', width: 'min-content' }}
          >
            FAQ
          </Badge>
          <Text className={classes.fourthSectionMainText}>Perguntas comuns</Text>
        </FlexBox>

        <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '100px', gap: '50px' }}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Text className={classes.questionText}>O que devo considerar em minha avaliação?</Text>
            <Text className={classes.answerText}>
              Ao avaliar o restaurante universitário, você pode considerar diversos aspectos, tais
              como a qualidade da comida, o atendimento, a limpeza do ambiente e a variedade de
              opções oferecidas. <br /> <br />É importante que você leve em conta a realidade dos
              RUs ao fazer comparações, evitando considerar restaurantes que podem ter preços muito
              mais altos. Afinal, o valor pago no RU é significativamente mais acessível e a
              proposta do local é atender às necessidades dos estudantes.
            </Text>
          </FlexBox>

          <FlexBox direction={FlexBoxDirection.Column}>
            <Text className={classes.questionText}>Meu nome ficará exposto na avaliação?</Text>
            <Text className={classes.answerText}>
              Não, todas as avaliações são anônimas. Seu nome não será exibido e sua identidade será
              mantida em sigilo.
            </Text>
          </FlexBox>

          <FlexBox direction={FlexBoxDirection.Column}>
            <Text className={classes.questionText}>Qual é o objetivo da plataforma?</Text>
            <Text className={classes.answerText}>
              O objetivo da plataforma é proporcionar um espaço para que estudantes possam
              compartilhar suas experiências nos restaurantes universitários, permitindo que outros
              alunos conheçam as avaliações e façam escolhas informadas sobre onde comer. <br />
              <br /> Além disso, acreditamos que os orgãos gerenciadores dos RUs avaliados pelos
              usuários em nossa plataforma podem contribuir para a evolução dos restaurantes de um
              modo geral. Dessa forma, as avaliações podem servir como uma métrica de qualidade
              destes estabelecimentos.
            </Text>
          </FlexBox>

          <FlexBox direction={FlexBoxDirection.Column}>
            <Text className={classes.questionText}>
              Durante quanto tempo uma avaliação fica disponível?
            </Text>
            <Text className={classes.answerText}>
              Uma avaliação fica disponível por até um mês após ser enviada. Nós optamos por manter
              as avaliações temporárias porque acreditamos que os RUs têm a capacidade de evoluir e
              se adaptar às necessidades dos estudantes ao longo do tempo.
            </Text>
          </FlexBox>

          <FlexBox direction={FlexBoxDirection.Column}>
            <Text className={classes.questionText}>
              Sou estudante e gostaria de obter acesso às avaliações, é possível?
            </Text>
            <Text className={classes.answerText}>
              Sim, é possível obter acesso às avaliações em nossa plataforma. Se você é estudante e
              deseja ter acesso às avaliações, por favor, entre em contato conosco pelo e-mail{' '}
              <u>unifood.tech@gmail.com</u>. Vamos avaliar sua solicitação e fornecer os detalhes
              sobre as condições de utilização dos dados de avaliações em nossa plataforma. <br />
              <br /> Lembramos que é fundamental respeitar a Lei Geral de Proteção de Dados (LGPD) e
              as políticas de privacidade em vigor. Portanto, as informações fornecidas a você
              estarão de acordo com as regulamentações e garantirão a privacidade e anonimato dos
              avaliadores.
            </Text>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Row} className={classes.footer}>
        <Text className={classes.footerText}>
          A missão da plataforma UniFood é tornar a experiência gastronômica universitária ainda
          mais especial e prática. Nossa proposta é simples: fornecer um espaço onde você possa
          avaliar os restaurantes universitários (RUs) com facilidade e compartilhar suas
          experiências. Suas avaliações podem contribuir para melhorar a experiência de todos que
          utilizam os mesmos RUs que você!
        </Text>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Text className={classes.footerContactHeader}>Contato: </Text>
          <Text className={classes.footerContact}>unifood.tech@gmail.com</Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
