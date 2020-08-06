import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css'



function TeacherForm (){

    const [ScheduleItems, setScheduleItems] = useState([
        {week_day:0, from: '', to:''},
        {week_day:0, from: '', to:'' },
    ]);


    function addNewScheduleItem(){
        setScheduleItems([  // primeiro copia todos os arrays existentes depois coloca o objeto que irá ser inserido
            ...ScheduleItems,  // seleciona todos os items dentro de um array ja existente

            {
                week_day:0,
                from: '',
                to:''
            }
        ]);

    }

    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
         title="Que incrível que você quer dar aula"
         description = "O primeiro passo é preecnher esse fomulário de inscrição"
        />        

        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input name = "name" label = "Nome completo"/> 
                <Input name = "avatar" label = "Avatar"/> 
                <Input name = "whatsapp" label = "Whatasapp"/> 
                <TextArea name="bio" label="Briografia"/>


           
            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Select 
                name = "subject" 
                label = "Matéria"
                options={[
                    {value: 'Artes' , label: 'Artes'},
                    {value: 'Biologia' , label: 'Biologia'},
                    {value: 'Física' , label: 'Física'},
                    {value: 'Química' , label: 'Química'},
                    {value: 'Matemática' , label: 'Matemática'},
                    {value: 'Potuguês' , label: 'Potuguês'},
                    {value: 'Hitória' , label: 'Hitória'},
                    {value: 'Geografia' , label: 'Geografia'},
                ]}
                /> 
                <Input name = "cost" label = "Custo da sua hora aula"/> 
           
            </fieldset>

            <fieldset>
                <legend>
                    Horários disponiveis
                    <button type="button" onClick={addNewScheduleItem}>
                    + Novo horário
                    </button>
                </legend>
               
               {ScheduleItems.map(scheduleitem =>{
                   return (
                    <div key= {scheduleitem.week_day}className="schedule-item">
                    <Select 
                        name = "wee_day" 
                        label = "Dia da semana"
                        options={[
                            {value: '0' , label: 'Domingo'},
                            {value: '1' , label: 'Segunda-Feira'},
                            {value: '2' , label: 'Terça-Feira'},
                            {value: '3' , label: 'Quarta-Feira'},
                            {value: '4' , label: 'Quinta-Feira'},
                            {value: '5' , label: 'Sexta-Feira'},
                            {value: '6' , label: 'Sábado'},
                        ]}
                        />       
    
                        <Input  name="from" label="Das" type="time"/>
                        <Input  name="to" label="Até" type="time"/>
                   </div>
                   )
               })}
            </fieldset>

            <footer>
            <p> <img src={warningIcon} alt="Aviso importante"/> 
            Importante! <br/>
            Preencha todos os dados 
            </p>
            <button type="button">
                Salvar cadastro
            </button>
            </footer>
        </main>

     </div>
    )
}

export default TeacherForm;