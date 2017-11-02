# Write a function to check that a binary tree is a valid binary search tree
# Check if the node's value is greater than all values in the left subtree
# Check if the node's value is less than all values in the right subtree
# Complexity is O(n) time and space

class BinaryTreeNode
  attr_accessor :value
  attr_reader :left, :right
    
  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
    
  def insert_left(value)
    @left = BinaryTreeNode.new(value)
    return @left
  end
    
  def insert_right(value)
    @right = BinaryTreeNode.new(value)
    return @right
  end

  def bst_checker(root)
    # start at the root, with an arbitrarily low lower bound
    # and an arbitrarily high upper bound
    nodes_and_bounds_stack = []
    nodes_and_bounds_stack.push([root, -Float::INFINITY, Float::INFINITY])
        
    # depth-first traversal
    while !node_and_bounds_stack.empty?
      node, lower_bound, upper_bound = node_and_bounds_stack.pop()
            
      # if this node is invalid, we return false right away
      if (node.value < lower_bound) || (node.value > upper_bound)
        return false
      end
            
      if node.left
        # this node must be less than the current node
        node_and_bounds_stack.push([node.left, lower_bound, node.value])
      end
            
      if node.right
        # this node must be greater than the current node
        node_and_bounds_stack.push([node.right, node.value, upper_bound])
      end
    end
    # if none of the nodes were invalid, return true
    # at this point we have checked all nodes
    return true
	end
    
end
