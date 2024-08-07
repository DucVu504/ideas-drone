import CesiumView3DTiles from '@/components/common/projectWorkspace/cesiumView3DTiles/CesiumView3DTiles';
import CesiumView2D from '@/components/common/projectWorkspace/cesiumView2D/CesiumView2D';
import Navigator from '@/components/common/projectWorkspace/navigator/Navigator';

const ProjectWorkspace = () => {
    return (
      <div>
        <Navigator/>
        {/* <CesiumView2D/> */}
        <CesiumView3DTiles/>
      </div>
  
    );
  };
  
  export default ProjectWorkspace;