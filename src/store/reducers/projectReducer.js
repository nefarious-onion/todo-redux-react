const initState = {
    projects: [
        { id: '1', title: 'write song lyrics', content: 'nihkeet naiset tuli kaupunkiin' },
        { id: '2', title: 'learn to play ukulele', content: 'nihkeet naiset tuli kaupunkiin' },
        { id: '3', title: 'lear to compose songs', content: 'nihkeet naiset tuli kaupunkiin' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
                console.log('project created', action.project)

            
    }
    return state
}

export default projectReducer;