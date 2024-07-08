import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "./navbar.module.css";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

function Header({ books }) {
  const btn = [
    {
      id: 1,
      image: "./assets/images/bristore/Toddlers.svg",
      name: "Toddlers",
      category: "Toddlers",
    },
    {
      id: 2,
      image: "./assets/images/bristore/pre-school.svg",
      name: "Pre-School",
      category: "Pre-School",
    },
    {
      id: 3,
      image: "./assets/images/bristore/primary school.svg",
      name: "Primary School",
      category: "Primary School",
    },
    {
      id: 4,
      image: "./assets/images/bristore/9th grade.svg",
      name: "9th Grade",
      category: "9th Grade",
    },
    {
      id: 5,
      image: "./assets/images/bristore/10th grade.svg",
      name: "10th Grade",
      category: "10th Grade",
    },
    {
      id: 6,
      image: "./assets/images/bristore/11th grade.svg",
      name: "11th Grade",
      category: "11th Grade",
    },
    {
      id: 7,
      image: "./assets/images/bristore/12th grade.svg",
      name: "12th Grade",
      category: "12th Grade",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = books.filter(
      (book) =>
        book.name?.toLowerCase().includes(query) ||
        book.title?.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
    // console.log(filtered);
  };
  const Imgurl =
    "https://youbooks-storage-5fd6173683748-webdev.s3.amazonaws.com/";
  return (
    <>
      {/* -------------------- nav bar start --------------------- */}
      <Navbar expand="lg" className="container-fluid bg-body-tertiary  ">
        <Container className="">
          <Navbar.Brand href="/bristore" className="">
            <img src="./assets/images/bristore/LOGO (1).svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-between text-center"
            id="navbarScroll  "
          >
            <Form inline className={`${styles.dropdown} my-2 d-flex`}>
              <InputGroup.Text
                id="basic-addon1 "
                className={`${styles.border} `}
              >
                <NavDropdown className={`${styles.dropDown}`} title="All">
                  <NavDropdown.Item className={`${styles.dropDown}`}>
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.test} `}>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </InputGroup.Text>
              <Form.Control
                className={styles.formcontrol}
                placeholder="Search by title, author or ISBN here..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </Form>
            <Form className={`${styles.navbtn} mx-2`}>
              <Link href="/bristore/login">
                <Button variant="outline-secondary" className=" me-3 ">
                  <span className={styles.BiUser}>
                    <BiUser />
                  </span>
                  Login/Register
                </Button>
              </Link>

              <Link href="/bristore/cart">
                <Button variant="outline-secondary">
                  <span>
                    <IoCartOutline />
                  </span>
                  Cart
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ----------------------- buttons --------------------- */}
      <div className="container justify-content-md-between justify-content-center d-flex flex-wrap">
        {btn.map((item, i) => (
          <div className="my-2  text-center" key={i}>
            <div className={btn?.length !== i + 1 && "border-end mx-2"}>
              <img src={item.image} className={`${styles.img} px-3`} />
            </div>
          </div>
        ))}
        {/* <div className="container justify-content-md-between justify-content-center d-flex flex-wrap">
          {filteredBooks.map((book, i) => (
            <div className="my-2 text-center" key={i}>
              <div className=" mx-2">
                <img
                  src=
                  className={`${styles.img} px-3`}
                  alt={book.title || book.name}
                />
                <div>{book.title || book.name}</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className={`${styles.showingbooks} d-flex`}>
        {searchQuery ? (
          filteredBooks.length > 0 ? (
            filteredBooks.map((book, i) => (
              <div className="my-2 text-center" key={i}>
                <div
                  // className={
                  //   filteredBooks.length !== i + 1 ? "border-end mx-2" : ""
                  // }
                  className={`${styles.books_box}`}
                >
                  <img
                    src={Imgurl + "public/" + book.cover_image}
                    className={`${styles.img} px-3`}
                    alt={book.title || book.name}
                  />
                  <div>{book.title || book.name}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="my-2 text-center">No books found</div>
          )
        ) : (
          <div className="my-2 text-center">
            Enter a search query to find books
          </div>
        )}
      </div> */}
      {searchQuery && (
        <div className={`${styles.showingbooks} d-flex`}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, i) => (
              <div className="my-2 text-center" key={i}>
                <div className={`${styles.books_box}`}>
                  <img
                    src={Imgurl + "public/" + book.cover_image}
                    className={`${styles.img} px-3`}
                    alt={book.title || book.name}
                  />
                  <h6>{book.title || book.name}</h6>
                </div>
              </div>
            ))
          ) : (
            <div className="my-2 text-center">No books found</div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
