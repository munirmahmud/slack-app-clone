import React from 'react';
import './MessageContent.styles.css';

const MessageContent = (props) => {

    return (
        <div className="message__content">
            <div className="row">
                <div className="message__content-wrapper">
                    <img src="https://ca.slack-edge.com/T04GZKGQY-U014TDGHJQN-fe8d05f98df9-48" alt="Avatar"/>
                    <div className="message__info">
                        <strong>Munir Mahmud <span>Time...</span></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur debitis deserunt eligendi eum exercitationem, illum laudantium nisi officia officiis sint, unde vero vitae. Architecto at delectus exercitationem ipsa veritatis!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageContent;