import { doc, updateDoc } from "firebase/firestore";
import styled from "styled-components";
import { dbService } from "../../firebase";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AlertDialog from "./DeleteModal";
import { POINT_COLOR } from "../../color";

export default function MypageContentsReview({ reviews, user }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [thisItem, setThisItem] = useState();

  const editButtonHanler = function (item) {
    setThisItem(item);
    setIsEdit(!isEdit);
  };

  const onChangeText = function (event) {
    setEditText(event.target.value);
  };

  const editReview = async (id) => {
    await updateDoc(doc(dbService, "reviews", id), {
      contents: editText,
    });
  };

  const navigateDetail = function (item) {
    navigate(`/detail/${item.detailId}`, { state: item });
  };

  return (
    <>
      {reviews.map((item) => {
        return (
          <Container key={item.date.seconds}>
            <ReviewProfile>
              <Avatar
                alt="Avatar"
                src={user?.photoURL ? user?.photoURL : null}
              />
            </ReviewProfile>
            <ReviewCard>
              <div style={{ display: "flex" }}>
                <div>
                  <ReviewInfo
                    onClick={() => {
                      navigateDetail(item);
                    }}
                  >
                    {item.place_name}
                  </ReviewInfo>
                  <div>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(item.createdAt)
                        .toLocaleDateString()
                        .replace(/\./g, "")
                        .replace(/\s/g, " / ")}
                    </Typography>
                  </div>
                </div>
                <ReviewBtnArea>
                  <BiEdit
                    size={"30px"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      editButtonHanler(item.id);
                    }}
                  />
                  <AlertDialog item={item} />
                  {/* <BiTrash
                    size={"30px"}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteButtonConfirm(item.id)}
                  /> */}
                </ReviewBtnArea>
              </div>
              {thisItem === item.id && isEdit ? (
                <>
                  <ReviewEditor>
                    <ReviewTextArea onChange={onChangeText}>
                      {item.contents}
                    </ReviewTextArea>
                  </ReviewEditor>
                  <ReviewEditBtn
                    variant="contained"
                    color="success"
                    style={{ marginRight: "2px" }}
                    onClick={() => {
                      editReview(item.id);
                      setIsEdit(false);
                    }}
                  >
                    수정
                  </ReviewEditBtn>
                  <ReviewEditBtn
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      setIsEdit(false);
                    }}
                  >
                    취소
                  </ReviewEditBtn>
                </>
              ) : (
                <p>{item.contents}</p>
              )}
            </ReviewCard>
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  padding: 20px 0px 20px 0px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  margin: 0px 0px 20px 0px;
`;

const ReviewCard = styled.div`
  width: 550px;
`;

const ReviewProfile = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;

const ReviewInfo = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: 0.1s ease-out;
  &:hover {
    color: ${POINT_COLOR};
    transition: 0.1s ease-out;
  }
`;

const ReviewEditor = styled.div`
  width: 100%;
`;

const ReviewBtnArea = styled.div`
  display: flex;
  margin-left: auto;
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 50px;
`;

const ReviewEditBtn = styled.button``;
