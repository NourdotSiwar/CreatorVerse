import Card from '../components/Card';
import '../styles/ShowCreators.css';
import { supabase } from '../client';
import { useEffect, useState } from 'react';

const ShowCreators = () => {
      
      const [creator, setCreator] = useState(null);

      useEffect(() => {
            getCreators();
      }, []);

      async function getCreators() {
            const {data} = 
            await supabase.from('creators').select();
            setCreator(data);
      }

      return (
            <div className="showcreators-div">
                  <div className="grid-container">
                  {creator ? creator.map((creator) => (
                        <div className="grid-item" key={creator.id}><Card name={creator.name} description={creator.description}/></div>
                        

                  )) : null
                        }
                  </div>
            </div>
      )
      }

export default ShowCreators;