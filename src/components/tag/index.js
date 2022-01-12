import React from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap";

function Tag({selected, title, trash}) {


    return (
        <>
            {
                title &&
                <div className={`${selected ? "tag selected" : "tag"}`}>
                    <div className={'tag_row'}>
                        {
                            title && <span>{title}</span>
                        }
                        {
                            trash && <Button className={'trash_btn'}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </Button>
                        }
                        {
                            selected && <div className={'check_icon checked'}>
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default Tag;
