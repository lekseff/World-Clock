import {v4} from 'uuid';
import { useState } from 'react';
import Form from './components/Form/Form';
import Clock from './components/Clock/Clock';
import './App.css';

function App () {
  const [watches, setWatches] = useState([]);
  const [form, setForm] = useState({city: '', timezone: ''});

  // Обработка изменений событий input
  const handleChange = ({name, value}) => {
    setForm((prevForm) => ({...prevForm, [name]: value}));
  }

  // Добавляет новые часы
  const addWatch = () => {
    setWatches((prevWatches) => [...prevWatches, {...form, id: v4()}]);
    setForm({city: '', timezone: ''});
  }

  // Удаляет часы
  const removeWatch = (watch) => {
    setWatches((prevWatches) => prevWatches.filter((item) => item.id !== watch.id))
  }


  return (
    <>
      <Form form={form} onChange={handleChange} onSubmit={addWatch}/>
      <div className="all-clock">
        {!watches.length ? <p>Добавьте часы...</p> 
        : watches.map((watch) => <Clock watch={watch} key={watch.id} remove={removeWatch}/>)}
      </div>
    </>
  )
}

export default App;
