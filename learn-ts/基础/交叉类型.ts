interface Props1 {
  className: string;
}

interface Props2 {
  onClick: () => void;
}

// &交叉类型 将多个类型合并为一个类型，新的类型将具有所有类型的特性
const props: Props1 & Props2 = {
  onClick: () => {},
  className: 'luckyship-btn',
};
