
import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {

        // Ternary Operator
        const ninjaList = ninjas.map(ninja => { 
            return ninja.age > 20 ? (
                <div key={ninja.id} >
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ME</button>
                    <br></br>
                </div>
            ) : null;
        })

        //RETURN
        return(
            <div className="ninja">
                {ninjaList}
            </div>

        )
};

export default Ninjas;