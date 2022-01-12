import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Form } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactCard from "../ContactCard";
import * as _ from "lodash";
import { getContacts } from "../../util/contact";
function ContactsPanel() {
  const [page, setPage] = useState(1);
  const [accessToken, setAccessToken] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    login();
  }, []);

  useEffect(async () => {
    if (!accessToken) return;
    let contacts = await getContacts(accessToken, JSON.stringify(page));
    setContacts(contacts);
  }, [accessToken, page]);

  function login() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
        teamId: "a001994b-918b-4939-8518-3377732e4e88",
      }),
    };

    fetch("https://api-teams.chatdaddy.tech/token", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, "result result");
          setAccessToken(result?.access_token);
        },
        (error) => {
          console.log(error, " error error");
        }
      );
  }

  function onScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      setPage(page + 1);
    }
  }

  const search = () => {
    var debounce_fun = _.debounce(function () {
      console.log("asasa");

    }, 1000);

    debounce_fun();
  };

  return (
    <div className={"contacts_panel"}>
      {/* Contacts Head */}
      <div className={"contactsPanel_head"}>
        <h4>All Contacts(100)</h4>
        <Button variant={"success"} className={"btn_round_sm"}>
          +
        </Button>
      </div>
      {/* Contacts Search */}
      <div className={"contacts_search"}>
        <Form.Control
          placeholder={"Search"}
          type={"text"}
          onChange={() => search()}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      {/* Select Head */}
      <div className={"select_head"}>
        <div className="form_check">
          <input type="checkbox" id="selectAll" />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <Button size={"sm"} variant={"success"}>
          Export All
        </Button>
      </div>

      <div className={"contacts_list_wrap"} onScroll={onScroll}>
        {contacts?.map((contact) => (
          <ContactCard
            contact={contact}
            contactName={"Anilly Moon"}
            contactNumber={"+0123456789"}
            contactId={1}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactsPanel;
