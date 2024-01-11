/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoutesEnum';

export const CreateReview: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [ruCode, setRuCode] = useState<string>();
  const [universityName, setUniversityName] = useState<string>();
  const [mealPeriod, setMealPeriod] = useState<string>();
  const [comment, setComment] = useState<string>();
  const [tags, setTags] = useState<string>();
  const [rating, setRating] = useState<number>();
  const [courseName, setCourseName] = useState<string>();
  const [coursePeriod, setCoursePeriod] = useState<string>();
  const [dietaryPreference, setDietaryPreference] = useState<string>();
  const [city, setCity] = useState<string>();

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

  const onMealPeriodMultiComboBoxChange = (oEvent) => {
    setTags(oEvent.detail.items.map((item) => item.dataset.key));
  };

  const onSendButtonClick = () => {};

  const onCancelButtonClick = () => {
    navigate(AppRoute.Home);
  };

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
            <Title level={TitleLevel.H4}>1. Informações da Avaliação</Title>
            <Text className={classes.text}>
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
                    <Input
                      placeholder="Ex.: RU01"
                      onChange={(e) => setRuCode(e.target.value)}
                      className={classes.ruInput}
                      required
                    ></Input>
                    <Input
                      placeholder="Ex.: UFRGS"
                      onChange={(e) => setUniversityName(e.target.value)}
                      className={classes.universityInput}
                      required
                    ></Input>
                  </FormItem>
                  <FormItem label="Período da Refeição">
                    <Select
                      onChange={(e) => setMealPeriod(e.detail.selectedOption.dataset.id)}
                      className={classes.mealPeriodSelect}
                    >
                      <Option data-id="Select">Selecionar</Option>
                      <Option data-id="Café da manhã">Café da manhã</Option>
                      <Option data-id="Almoço">Almoço</Option>
                      <Option data-id="Jantar">Jantar</Option>
                    </Select>
                  </FormItem>
                  <FormItem label={<Label className={classes.commentLabel}>Comentário</Label>}>
                    <TextArea
                      className={classes.textArea}
                      placeholder="Ex.: Muito bom o restaurante!"
                      rows={8}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </FormItem>
                  <FormItem label="Tags">
                    <MultiComboBox
                      placeholder="Ex.: Comida saborosa"
                      onSelectionChange={onMealPeriodMultiComboBoxChange}
                      className={classes.multiComboBox}
                    >
                      {[...positiveTags, ...negativeTags].map((tag, index) => {
                        return <MultiComboBoxItem text={tag} data-key={tag} key={index} />;
                      })}
                    </MultiComboBox>
                  </FormItem>
                  <FormItem label="Nota">
                    <RatingIndicator onChange={(e) => setRating(e.target.value)} />
                  </FormItem>
                </FormGroup>
              </Form>
            </FlexBox>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>2. Informações Opcionais</Title>
            <Text className={classes.text}>Queremos saber um pouco mais sobre seu perfil.</Text>
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
                  <FormItem label="Curso e Período">
                    <Input
                      placeholder="Ex.: Ciência da Computação"
                      onChange={(e) => setCourseName(e.target.value)}
                      className={classes.courseNameInput}
                    ></Input>
                    <Input
                      placeholder="Ex.: 6"
                      onChange={(e) => setCoursePeriod(e.target.value)}
                      className={classes.coursePeriodInput}
                    ></Input>
                  </FormItem>
                  <FormItem label="Preferência alimentar">
                    <Select
                      onChange={(e) => setDietaryPreference(e.detail.selectedOption.dataset.id)}
                      className={classes.dietaryPreferenceSelect}
                    >
                      <Option data-id="Select">Selecionar</Option>
                      <Option data-id="Onívora">Onívora</Option>
                      <Option data-id="Vegetariana">Vegetariana</Option>
                      <Option data-id="Vegana">Vegana</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="Cidade">
                    <Input
                      placeholder="Ex.: Porto Alegre"
                      onChange={(e) => setCity(e.target.value)}
                      className={classes.cityInput}
                    ></Input>
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
            <Button
              design={ButtonDesign.Default}
              className={classes.cancelButton}
              onClick={onCancelButtonClick}
            >
              Cancelar
            </Button>
            <Button
              design={ButtonDesign.Emphasized}
              className={classes.sendButton}
              onClick={onSendButtonClick}
            >
              Enviar
            </Button>
          </>
        }
        className={classes.floatingBar}
      />
    </FlexBox>
  );
};
