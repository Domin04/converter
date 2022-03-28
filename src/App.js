import React, {useState} from 'react';
import App from './App.css' 

function Converter() {

const [unit1, setUnit1] = useState('');
const [unit2, setUnit2] = useState(''); 
const [value1, setValue1] = useState(null); 
const [value2, setValue2] = useState(null); 

 const look = (e) =>{
   setUnit1(e.target.value)
 }
 const looks = (e) =>{
    setUnit2(e.target.value)
 }
 const settingVal = (e) =>{
    setValue1(e.target.value);
 }


    return (
        <div>
            <div className='nav'>
                <p>Konwerter Radaszkiewicz Sodo</p>
            </div>
            <div className='app'>
                <h3>Konwerter</h3>
                <input className='onebox' placeholder='From......' value={value1} onChange={(e)=>settingVal(e)} />
                <button onClick={()=>convertBut()}>convert</button>
                <input className='twobox' placeholder='To......'  value={value2}/>
                <select className='oneviewbox' onChange={(e)=>look(e)}>
                    <option selected='selected'>Wybierz jednostke</option>
                    <option value='km'>Kilometry</option>
                    <option value='m' >Metry</option>
                    <option value='cm'>Centymetry</option>
                    <option value='mm'>Milimetry</option>
                    <option value='mi'>Mile</option>
                    <option value='y'>Jard</option>
                </select>
            <select className='twoviewbox'onChange={(e)=>looks(e)}>
                    <option selected='selected'>Wybierz jednostke</option>
                    <option value='km'>Kilometry</option>
                    <option value='m'>Metry</option>
                    <option value='cm'>Centymetry</option>
                    <option value='mm'>Milimetry</option>
                    <option value='mi'>Mile</option>
                    <option value='y'>Jard</option>
                </select>
            </div>
            <div className='info'>
                <h4>Available Units</h4>
                <ul>
                    <li>Kilometry</li>
                    <li>Metry</li>
                    <li>Centymetry</li>
                    <li>Milimetry</li>
                    <li>Mile</li>
                    <li>Jard</li>
                </ul>
            </div>
        </div>
    )
}

export default Converter