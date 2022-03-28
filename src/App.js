import React, {useState} from 'react';
import App from './App.css' 

function Converter() {

const [unit1, setUnit1] = useState('');
const [unit2, setUnit2] = useState(''); 
const [unit3, setUnit3] = useState('');
const [unit4, setUnit4] = useState(''); 
const [value1, setValue1] = useState(null); 
const [value2, setValue2] = useState(null); 
const [value3, setValue3] = useState(null); 
const [value4, setValue4] = useState(null); 

 const look = (e) =>{
   setUnit1(e.target.value)
 }
 const look3 = (e) =>{
  setUnit3(e.target.value)
}
 const looks = (e) =>{
    setUnit2(e.target.value)
 }
 const looks4 = (e) =>{
  setUnit4(e.target.value)
}
 const settingVal = (e) =>{
    setValue1(e.target.value);
 }
 const settingVal3 = (e) =>{
  setValue3(e.target.value);
}

 const convert = () =>{
  var calc = value1;
  switch (unit1) {
     case 'km':
          switch (unit2) {
                 case 'm':
                     setValue2(+calc*1000)
                     break;
                 case 'km':
                     setValue2(+calc)
                     break;
                 case 'cm':
                     setValue2(+calc*100000)
                     break;
                 case 'mm':
                     setValue2(+calc*1000000)
                     break;
                 case 'f':
                     setValue2(+calc*3280.8)
                     break;
                 case 'i':
                     setValue2(+calc*39370.07874)
                     break;
                 case 'y':
                     setValue2(+calc*1093.6)
                     break;
                 case 'mi':
                     setValue2(+calc*0.6214)
                     break;
             default:
                 break;
         }
         break;
     case 'm':
         switch (unit2) {
             case 'm':
                 setValue2(+calc)
                 break;
             case 'km':
                 setValue2(+calc/1000)
                 break;
             case 'cm':
                 setValue2(+calc/0.010000)
                 break;
             case 'mm':
                 setValue2(+calc/0.0010000)
                 break;
             case 'f':
                 setValue2(+calc*3.2808)
                 break;
             case 'i':
                 setValue2(+calc*39.370)
                 break;
             case 'y':
                 setValue2(+calc*1.0936)
                 break;
             case 'mi':
                 setValue2(+calc*0.00062137)
                 break;
               default:
                break;
     }             
         break;
     case 'cm':
         switch (unit2) {
             case 'm':
                 setValue2(+calc/100.00)
                 break;
             case 'km':
                 setValue2(+calc/100000)
                 break;
             case 'cm':
                 setValue2(+calc)
                 break;
             case 'mm':
                 setValue2(+calc/0.10000)
                 break;
             case 'f':
                 setValue2(+calc*0.032808)
                 break;
             case 'i':
                 setValue2(+calc*0.39370)
                 break;
             case 'y':
                 setValue2(+calc*0.010936)
                 break;
             case 'mi':
                 setValue2(+calc*0.0000062137)
                 break;
         default:
             break; 
         }            
         break;
     case 'mm':
         switch (unit2) {
             case 'm':
                 setValue2(+calc/1000.0)
                 break;
             case 'km':
                 setValue2(+calc/1000000)
                 break;
             case 'cm':
                 setValue2(+calc/10.000)
                 break;
             case 'mm':
                 setValue2(+calc)
                 break;
             case 'f':
                 setValue2(+calc*0.0032808)
                 break;
             case 'i':
                 setValue2(+calc*0.039370)
                 break;
             case 'y':
                 setValue2(+calc*0.0010936)
                 break; 
             case 'mi':
                 setValue2(+calc*0.00000062137)
                 break;
         default:
             break;
         }
         break;
     case 'mi':
         switch (unit2) {
             case 'm':
                 setValue2(+calc/0.00062137)
                 break;
             case 'km':
                 setValue2(+calc/0.62137)
                 break;
             case 'cm':
                 setValue2(+calc/0.0000062137)
                 break;
             case 'mm':
                 setValue2(+calc/0.00000062137)
                 break;
             case 'f':
                 setValue2(+calc*5280.0)
                 break;
             case 'i':
                 setValue2(+calc*63360)
                 break;
             case 'y':
                 setValue2(+calc*1760.0)
                 break;
             case 'mi':
                 setValue2(+calc)
                 break;
             default:
             break;
         }
         break;
     case 'y':
         switch (unit2) {
             case 'm':
                     setValue2(+calc/1.0936)
                     break;
             case 'km':
                     setValue2(+calc/1093.6)
                     break;
             case 'cm':
                     setValue2(+calc/0.010936)
                     break;
             case 'mm':
                     setValue2(+calc/0.0010936)
                     break;
             case 'f':
                     setValue2(+calc*3.0000)
                     break;
             case 'i':
                     setValue2(+calc*36.000)
                     break;
             case 'y':
                     setValue2(+calc)
                     break;
             case 'mi':
                     setValue2(+calc*0.00056818)
                     break;
                 default:
                     break;
                     }
          break;
     }
}
const convert2 = () =>{
  var calc = value3;
  switch (unit3) {
     case 'g':
          switch (unit4) {
                 case 'dag':
                     setValue4(+calc/10)
                     break;
                 case 'g':
                     setValue4(+calc)
                     break;
                 case 'kg':
                     setValue4(+calc/1000)
                     break;
                 case 't':
                     setValue4(+calc/1000000)
                     break;
             default:
                 break;
         }
         break;
     case 'dag':
         switch (unit4) {
             case 'dag':
                 setValue4(+calc)
                 break;
             case 'g':
                 setValue4(+calc*10)
                 break;
             case 'kg':
                 setValue4(+calc/100)
                 break;
             case 't':
                 setValue4(+calc/100000)
                 break;
               default:
                break;
     }             
         break;
     case 'kg':
         switch (unit4) {
             case 'g':
                 setValue4(+calc*1000)
                 break;
             case 'dag':
                 setValue4(+calc*100)
                 break;
             case 'kg':
                 setValue4(+calc)
                 break;
             case 't':
                 setValue4(+calc/1000)
                 break;
         default:
             break; 
         }            
         break;
     case 't':
         switch (unit4) {
             case 'g':
                 setValue4(+calc/1000000)
                 break;
             case 'dag':
                 setValue4(+calc/100000)
                 break;
             case 'kg':
                 setValue4(+calc/1000)
                 break;
             case 't':
                 setValue4(+calc)
                 break;
         default:
             break;
         }
         break;
        }
}

    return (
        <div>
            <div className='nav'>
                <p>Konwerter</p>
            </div>
            <div className='app'>
                <input className='onebox' placeholder='' value={value1} onChange={(e)=>settingVal(e)} />
                <button id="btn1" onClick={()=>convert()}>Przekonwertuj</button>
                <input className='twobox' placeholder=''  value={value2}/>
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
                


                <input className='threebox' placeholder='' value={value3} onChange={(e)=>settingVal3(e)} />
                <button id="btn2" onClick={()=>convert2()}>Przekonwertuj</button>
                <input className='fourbox' placeholder=''  value={value4}/>
                <select className='threeboxview' onChange={(e)=>look3(e)}>
                    <option selected='selected'>Wybierz jednostke</option>
                    <option value='g'>Gramy</option>
                    <option value='dag' >Dekagramy</option>
                    <option value='kg'>Kilogramy</option>
                    <option value='t'>Tony</option>
               
                    
                </select>
            <select className='fourboxview'onChange={(e)=>looks4(e)}>
                    <option selected='selected'>Wybierz jednostke</option>
                    <option value='g'>Gramy</option>
                    <option value='dag' >Dekagramy</option>
                    <option value='kg'>Kilogramy</option>
                    <option value='t'>Tony</option>
                </select>
            </div>
            <div className='info'>
                <h4>Dostępne Jednostki</h4>
                <ul>
                    <li>Kilometry</li>
                    <li>Metry</li>
                    <li>Centymetry</li>
                    <li>Milimetry</li>
                    <li>Mile</li>
                    <li>Jard</li>
                    <li id="brake"></li>
                    <li>Gramy</li>
                    <li>Dekagramy</li>
                    <li>Kilogramy</li>
                    <li>Tony</li>
                </ul>
            </div>
          <footer>
          <p>Autor: Dominik Sodo, Jakub Radaszkiewicz</p>
          </footer>
        </div>

    )
}

export default Converter
