import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    /*console.log('feefefe',employee)*/
    return (
        <div  className="DisplayEmployee">
 
             {/* EXERCICE ODYSSEY
             <img  src={employee.picture.medium}  alt="picture"  />
             <ul>
                 <li>Gender : {employee.gender}</li>
                 <li>
                     Name : {employee.name.title}  {employee.name.last}{' '}
                     {employee.name.first}
                 </li>
                 <li>E-mail : {employee.email}</li>
                 <li>
                     Location : {employee.location.street},
                     {employee.location.postcode}{' '}{employee.location.city}
                 </li>
             </ul>
            */} 

            <img src={employee.image}  alt="picture"  />
             <ul>
                 <li>Quote : {employee.quote}</li>
                 <li>Character : {employee.character}</li>
                 <li>CharacterDirection : {employee.characterDirection}</li>
             </ul>


        </div>
    );
};

export  default  DisplayEmployee;