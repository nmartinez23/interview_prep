# Write a function to find the 2nd largest element in a binary search tree
# Complexity is O(lgn) if the tree is balanced, O(n) otherwise. O(1) space

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
    
  def find_largest(root_node)
    current = root_node
    while current
      return current.value if !current.right
      current = current.right
    end
  end
    
  def find_second_largest(root_node)
    if !root_node.left && !root_node.right
      raise Exception, 'Tree must have at least 2 nodes'
    end
   
  	current = root_node
  	while current
      # case: current is largest and has a left subtree
      # 2nd largest is the largest in that subtree
      if current.left && !current.right
        return find_largest(current.left)
      end
            
      # case: current is parent of largest, and largest has no children,
      # so current is 2nd largest
      if current.right && \
        !current.right.left && \
        !current.right.right
          return current.value
      end
            
      current = current.right
    end
  end
end
