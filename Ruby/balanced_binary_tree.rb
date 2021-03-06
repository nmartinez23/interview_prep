# Write a function to see if a binary tree is "superbalanced" (a new tree property we just made up).
# A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
# Complexity is O(n) time and space.

def is_balanced(tree_root)
  depths = [] # we short-circuit as soon as we find more than 2
    
  # we'll treat this array as a stack that will store pairs [node, depth]
  nodes = []
  nodes.push([tree_root, 0])
    
  while !nodes.empty?
    # pop a node and its depth from top of stack
    node, depth = nodes.pop
        
    # case: we found a leaf
    if !node.left && !node.right
            
      # we only care if it's a new depth
      if !depths.include? depth
        depths.push(depth)
                
        # two ways we might now have an unbalanced tree
        # 1. more than 2 different leaf depths
        # 2. 2 leaf depths that are more than 1 apart
        if (depths.length > 2) || \
          (depths.length == 2 && (depths[0] - depths[1]).abs > 1)
          return false
        end
      end
    # case: this isn't a leaf - keep stepping down
    else
      if node.left
        nodes.push([node.left, depth + 1])
      end
      if node.right
        nodes.push([node.right, depth + 1])
      end
    end
  end
  return true
    
end

# run your function through some test cases here
# remember: debugging is half the battle!

