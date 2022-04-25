interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<
  T extends TreeNode | null,
  S extends NonNullable<T> = NonNullable<T>
> = [T] extends [S]
  ? [...InorderTraversal<S["left"]>, S["val"], ...InorderTraversal<S["right"]>]
  : []
