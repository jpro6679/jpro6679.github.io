/* 카테고리 목록 */
import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from 'gatsby';

type CategoryItemProps = {
    active: boolean;
}

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps;

export interface CategoryListprops {
    // TypeScript 타입 설정법 -> variable: type = value;
    // 타입 지정하고싶지 않을 때 any사용 -> ns: any = 4;
    selectedCategory: string;
    categoryList: {
        [key: string]: number;
    };
}
const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 50px;
        padding: 0 20px;
    }
`;

/* console.log(props) 
    active: 현재 선택된 카테고리인지 확인하기 위한 Props
    children: 컴포넌트 내부의 요소들
    className: Styled Component를 통해 정의한 스타일을 적용하기 위한 클래스명
    to: Link 컴포넌트에 전달하기 위한 경로
*/
const CategoryItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
    <Link to={to} {...props} />
))`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    cursor: pointer;
    font-weight: ${({ active }) => (active ? '800' : '400')};

    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const CategoryList: FunctionComponent<CategoryListprops> = function({
    selectedCategory,
    categoryList,
}){
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name == selectedCategory}
                    key={name}
                >
                    #{name}({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    );
};

export default CategoryList;