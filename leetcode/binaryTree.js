function diameterOfBinaryTree(root) {
    // Max Diameter
    let maxDiameter = 0

    // Helper function to calculate depth and update diameter
    function dfs(root){
        if(!root) return 0

        let left = dfs(root.left)
        let right = dfs(root.right)
        let total = left + right

        if(total > maxDiameter) maxDiameter = total

        return Math.max(left, right) + 1

    }

    dfs(root)
    return maxDiameter
}

module.exports = { diameterOfBinaryTree };