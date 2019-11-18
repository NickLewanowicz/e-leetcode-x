#include <vector>

class Solution {
public:
    int trap(std::vector<int>& height) {
        int size = height.size();
        if(size == 0) return {};
        std::vector<int> lmax(size);
        std::vector<int> rmax(size);

        lmax[0] = height[0];
        rmax[size-1] = height[size-1];
        
        for(int i = 1; i < height.size(); i++){
            lmax[i] = std::max(lmax[i-1], height[i]);
        }
        
        for(int i = height.size() - 2; i > -1; i--){
            rmax[i] = std::max(rmax[i+1], height[i]);
        }
        
        int result = 0;
        
        for(int i = 1; i < height.size() -1; i++){
            result += std::min(lmax[i], rmax[i]) - height[i];
        }
        
        return result;
    }
};