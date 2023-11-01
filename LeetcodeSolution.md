# Leetcode Submission

## 98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left
subtree
of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

```cpp
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    bool validate(TreeNode* root, long long minVal, long long maxVal) {
        if(!root){
            return true;
        }
        if(root->val >= maxVal || root->val <= minVal){
            return false;
        }
        return(validate(root->left, minVal, root->val) && validate(root->right,root->val,maxVal));
    }
};
```

Submission Link - https://leetcode.com/problems/validate-binary-search-tree/submissions/1089409237/
