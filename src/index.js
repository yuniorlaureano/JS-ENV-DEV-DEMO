import './index.css';
import { getUsers } from './api/userApi';

getUsers().then(result => {
    let usersBody = "";
    result.forEach(user => {
        usersBody += "<tr>" + user.firstName + "</tr>"
    });

    global.document.getElementById('users').innerHTML = usersBody;
});