const { useCallback } = React;
const ReactFlowLib = window.ReactFlow;

const ReactFlow = ReactFlowLib.ReactFlow;
const Background = ReactFlowLib.Background;
const Controls = ReactFlowLib.Controls;

const nodes = [
    {
        id: '1',
        data: { label: 'Cactus Canyon' },
        position: { x: 220, y: 20 },
        style: {
            background: '#f5e6c8',
            border: '2px solid #d4a017',
            borderRadius: '50%',
            width: 140,
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    {
        id: '2',
        data: { label: 'Marshall Multiball' },
        position: { x: 50, y: 220 }
    },
    {
        id: '3',
        data: { label: 'Bart Brothers' },
        position: { x: 350, y: 220 }
    },
    {
        id: '4',
        data: { label: 'Save the Train' },
        position: { x: 50, y: 420 }
    },
    {
        id: '5',
        data: { label: 'Saloon Party' },
        position: { x: 350, y: 420 }
    }
];

const edges = [
    { id: 'e1', source: '1', target: '2' },
    { id: 'e2', source: '1', target: '3' },
    { id: 'e3', source: '2', target: '4' },
    { id: 'e4', source: '3', target: '5' }
];

function App() {

    const onNodeClickFlow = useCallback((event, node) => {
        if (node.id === '2') onNodeClick("marshall");
        if (node.id === '4') onNodeClick("train");
        if (node.id === '3') onNodeClick("saloon");
        if (node.id === '5') onNodeClick("saloon");
    }, []);

    return React.createElement(
        ReactFlow,
        {
            nodes,
            edges,
            onNodeClick: onNodeClickFlow,
            fitView: true
        },
        React.createElement(Background),
        React.createElement(Controls)
    );
}

const root = ReactDOM.createRoot(document.getElementById('reactflow-root'));
root.render(React.createElement(App));