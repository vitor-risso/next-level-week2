import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css'
import api from '../../services/api';



function TeacherForm (){

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [ScheduleItems, setScheduleItems] = useState([
        {week_day:0, from: '', to:''},
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

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: ScheduleItems
        }).then(()=>{
            alert(`Cdastro realizado com sucesso!`)
        }).catch(()=>{
            alert(`Erro no cadastro`)
        })

       

    }

    function setScheduleItemValue(position :number, field :string , value:string){
        const updatedScheduleItems = ScheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return {...scheduleItem, [field]: value}
            }
            return scheduleItem;

        })
        setScheduleItems(updatedScheduleItems);
    }

    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
         title="Que incrível que você quer dar aula"
         description = "O primeiro passo é preecnher esse fomulário de inscrição"
        />        

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input 
                    name = "name" 
                    label = "Nome completo" 
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}} /> 
                    
                    <Input 
                    name = "avatar" 
                    label = "Avatar"  
                    value={avatar} 
                    onChange={(e) => {setAvatar(e.target.value)}}/> 

                    <Input 
                    name = "whatsapp" 
                    label = "Whatasapp"  
                    value={whatsapp} 
                    onChange={(e) => {setWhatsapp(e.target.value)}}/> 

                    <TextArea 
                    name="bio" 
                    label="Briografia"  
                    value={bio} 
                    onChange={(e) => {setBio(e.target.value)}}/>


            
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                    name = "subject" 
                    label = "Matéria"
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
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
                    <Input 
                    name = "cost" 
                    label = "Custo da sua hora aula"
                    value={cost}
                    onChange={(e)=>{setCost(e.target.value)}}
                    /> 
            
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                        </button>
                    </legend>
                
                {ScheduleItems.map((scheduleitem, index) =>{
                    return (
                        <div key= {scheduleitem.week_day}className="schedule-item">
                        <Select 
                            name = "wee_day" 
                            label = "Dia da semana"
                            value={scheduleitem.week_day}
                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
        
                            <Input  name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleitem.from}
                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input  name="to" 
                            label="Até" 
                            type="time"
                            value={scheduleitem.to}
                            onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />
                    </div>
                    )
                })}
                </fieldset>

                <footer>
                <p> <img src={warningIcon} alt="Aviso importante"/> 
                Importante! <br/>
                Preencha todos os dados 
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
                </footer>
            </form>    
        </main>

     </div>
    )
}

export default TeacherForm;