import styled from "@emotion/styled";

export const ErrorMessage = styled.div`
    color: "#EBBA71";
    font-size: 16px;
    text-align: center;
    margin-top: 50px;
`;

export const RootWrapperNaN = styled.div`
    min-height: 100vh;
    background: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
`;

export const Frame47 = styled.div`
    width: 360px;
    height: 54px;
    overflow: hidden;
    background: rgb(245, 239, 231);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    left: 0px;
    top: 0px;
`;

export const Vector = styled.svg`
    width: 20px;
    height: 15px;
    position: absolute;
    left: 16px;
    top: 22px;
    right: 324px;
    bottom: 17px;
`;

export const NaN_0002 = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 18px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: center;
    width: 112px;
    position: absolute;
    left: 125px;
    top: 19px;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: left; 
    align-items: center; 
    gap: 70px;
    margin-left: 40px;
`;

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    cursor: pointer;
    color: ${({ active }) => (active ? "#4F709C" : "white")};
`;

export const Rectangle34 = styled.svg`
    width: 52px;
    height: 29px;
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    corlor: white;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 20px;
`;
export const CategoryName = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: Inter, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    position: absolute; 
    top: 83px;
`;

export const CategoryNameBox = styled.span`
    color: black;
    text-overflow: ellipsis;
    font-size: 12px;
    font-family: Inter, sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    position: absolute; 
    bottom: 13px;
    margin-left: 10px;
`;



export const Ellipse9 = styled.div`
    width: 59px;
    height: 59px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgb(79, 112, 156);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 59px / 59px;
    position: absolute;
    left: 269px;
    top: 660px;
    &:hover {
      background: #213555;
    }
`;

export const Group5 = styled.div`
    display: flex;
    align-items: center;
`;

export const Rectangle22 = styled.div`
    width: 47px;
    height: 21px;
    background: ${({ color }) => color};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 10px;
`;

export const Group3 = styled.div`
    width: 321px;
    height: auto;
    position: absolute;
    left: 19px;
    top: 133px;
    bottom: 80px; 
    overflow-y: auto; 
`;

export const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;
export const NaN_0009 = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 13px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    margin-left: 5px; 
`;

export const PostItem = styled.div`
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    &:hover {
      background-color: #d9d9d9; 
    }
`;

export const PostContent = styled.span`
    color: black;
    font-size: 15px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    text-align: left;
    margin-top: 5px;
`;
