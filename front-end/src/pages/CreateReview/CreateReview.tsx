/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  FlexBox,
  FlexBoxDirection,
  Title,
  Text,
  TitleLevel,
  Form,
  FormGroup,
  FormItem,
  Input,
  Label,
  Select,
  Option,
  TextArea,
  FormBackgroundDesign,
  MultiComboBox,
  MultiComboBoxItem,
  RatingIndicator,
  Bar,
  Button,
  BarDesign,
  ButtonDesign
} from '@ui5/webcomponents-react';

import { useStyles } from './CreateReview.jss';
import '@ui5/webcomponents-icons/dist/AllIcons';
import { CustomShellBar } from '../../components/ShellBar/CustomShellBar/CustomShellBar';

export const CreateReview: React.FC = () => {
  const classes = useStyles();

  const positiveTags = [
    'Proteína macia',
    'Carboidrato de qualidade',
    'Leguminosa saborosa',
    'Variedade de saladas',
    'Com opção de sobremesa',
    'Ambiente harmonioso',
    'Bom cozimento dos alimentos',
    'Comida saborosa',
    'Boa temperatura dos pratos',
    'Bom atendimento',
    'Fila curta'
  ];

  const negativeTags = [
    'Proteína dura',
    'Carboidrato de baixa qualidade',
    'Leguminosa sem sabor',
    'Poucas opções de saladas',
    'Sem opção de sobremesa',
    'Ambiente barulhento',
    'Mau cozimento dos alimentos',
    'Comida de baixa qualidade',
    'Temperatura inadequada dos pratos',
    'Mau atendimento',
    'Fila grande'
  ];

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <CustomShellBar createReviewDisabled />

      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox direction={FlexBoxDirection.Row} className={classes.boxesContainer}>
          <FlexBox className={classes.box} direction={FlexBoxDirection.Row}>
            <FlexBox className={classes.boxTextContainer} direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H4}>
                Compartilhe seu feedback de uma refeição feita em um RU!
              </Title>
              <Text className={classes.boxSubtitle}>
                Suas avaliações irão ajudar outros universitários a decidir qual é o melhor RU para
                frequentar.
              </Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox
        direction={FlexBoxDirection.Row}
        className={classes.boxesContainer}
        style={{
          marginBottom: '80px'
        }}
      >
        <FlexBox className={classes.formBox} direction={FlexBoxDirection.Column}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>1. Informação do Restaurante Universitário</Title>
            <Text style={{ paddingLeft: '22px', marginTop: '20px', marginBottom: '20px' }}>
              Precisamos de algumas informações para poder identificar o RU da sua avaliação.
            </Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Form
                backgroundDesign={FormBackgroundDesign.Transparent}
                columnsL={1}
                columnsM={1}
                columnsS={1}
                columnsXL={2}
                labelSpanL={3}
                labelSpanM={2}
                labelSpanS={12}
                labelSpanXL={4}
              >
                <FormGroup>
                  <FormItem label="Código do RU e Sigla da Universidade">
                    <Input></Input>
                    <Input></Input>
                  </FormItem>
                  <FormItem label="Período da Refeição">
                    <Select>
                      <Option>Café da manhã</Option>
                      <Option>Almoço</Option>
                      <Option>Jantar</Option>
                    </Select>
                  </FormItem>
                </FormGroup>
              </Form>
            </FlexBox>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>2. Informações da Avaliação</Title>
            <Text style={{ paddingLeft: '22px', marginTop: '20px', marginBottom: '20px' }}>
              Conte-nos um pouco sobre sua experiência.
            </Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Form
                backgroundDesign={FormBackgroundDesign.Transparent}
                columnsL={1}
                columnsM={1}
                columnsS={1}
                columnsXL={2}
                labelSpanL={3}
                labelSpanM={2}
                labelSpanS={12}
                labelSpanXL={4}
                style={{
                  alignItems: 'center'
                }}
              >
                <FormGroup>
                  <FormItem
                    label={
                      <Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>
                        Comentário
                      </Label>
                    }
                  >
                    <TextArea
                      placeholder="Ex.: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,."
                      rows={6}
                    />
                  </FormItem>
                  <FormItem label="Tags">
                    <MultiComboBox>
                      {[...positiveTags, ...negativeTags].map((tag) => {
                        return <MultiComboBoxItem text={tag} />;
                      })}
                    </MultiComboBox>
                  </FormItem>
                  <FormItem label="Nota">
                    <RatingIndicator></RatingIndicator>
                  </FormItem>
                </FormGroup>
              </Form>
            </FlexBox>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>3. Informações Opcionais</Title>
            <Text style={{ paddingLeft: '22px', marginTop: '20px', marginBottom: '20px' }}>
              Queremos saber um pouco mais sobre seu perfil.
            </Text>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Form
                backgroundDesign={FormBackgroundDesign.Transparent}
                columnsL={1}
                columnsM={1}
                columnsS={1}
                columnsXL={2}
                labelSpanL={3}
                labelSpanM={2}
                labelSpanS={12}
                labelSpanXL={4}
                style={{
                  alignItems: 'center'
                }}
              >
                <FormGroup>
                  <FormItem label="Curso e Período">
                    <Input></Input>
                    <Input></Input>
                  </FormItem>
                  <FormItem label="Preferência alimentar">
                    <Select>
                      <Option>Café da manhã</Option>
                      <Option>Almoço</Option>
                      <Option>Jantar</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="Cidade">
                    <Input></Input>
                  </FormItem>
                </FormGroup>
              </Form>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <Bar
        design={BarDesign.FloatingFooter}
        endContent={
          <>
            <Button design={ButtonDesign.Default} style={{ marginRight: '10px', height: '30px' }}>
              Cancelar
            </Button>
            <Button design={ButtonDesign.Emphasized} style={{ height: '30px' }}>
              Enviar
            </Button>
          </>
        }
        style={{ position: 'fixed', bottom: '0', margin: '15px', width: 'calc(100vw - 30px)' }}
      />
    </FlexBox>
  );
};
