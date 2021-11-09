import Notes from './components/Notes';

const NotesHome=(props)=>{
    return (
<>
<Notes showAlert={props.showAlert} />
</>
    )
};
export default NotesHome;