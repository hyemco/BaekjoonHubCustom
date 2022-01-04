/* 백준 허브의 전역 변수 선언 파일입니다. */
/* 포함된 변수는 다음과 같습니다. 
    languages: 백준의 언어 및 그에 맞는 file extension
    bj_level: Solved.ac의 레벨별 매핑입니다. API 호출 시 0~31까지의 번호로 레벨이 표현되는데 이를 문자열로 매핑하였습니다.
    categories: Solved.ac의 문제 카테로기를 한글 번역본으로 매핑하는 역할을 합니다.
    CommitType: uploadGit에 사용되는 enum으로 readme 혹은 code를 업로드할 때 사용됩니다.
    titleRegex: 제목 형식의 regex 정의입니다.
    uploadState: 현재 업로드 중인지를 저장하는 boolean입니다.
    bojData: 깃허브에 업로드되는 사용자의 코드와 문제 요약을 담고 있습니다.
*/

/* Enum for languages supported by LeetCode. */

// prettier-ignore
// Languages supported by BOJ
const languages = {
  'Java 8': '.java',
  'C++14': '.cc',
  'Python 3': '.py',
  'C11': '.c',
  'PyPy3': '.py',
  'C99': '.c',
  'C++98': '.cc',
  'C++11': '.cc',
  'C++17': '.cc',
  'Java 8 (OpenJDK)': '.java',
  'Java 11': '.java',
  'C++20': '.cc',
  'Python 2': '.py',
  'PyPy2': '.py',
  'Ruby': '.rb',
  'Kotlin (JVM)': '.kt',
  'Kotlin (Native)': '.kt',
  'Swift': '.swift',
  'Text': '.txt',
  'C# 6.0 (Mono)': '.cs',
  'node.js': '.js',
  'Go': '.go',
  'D': '.d',
  'D (LDC)': '.d',
  'F# (Mono)': '.fs',
  'PHP': '.php',
  'Rust 2015': '.rs',
  'Rust 2018': '.rs',
  'Pascal': '.pas',
  'Lua': '.lua',
  'Perl': '.pl',
  'Objective-C': '.m',
  'Objective-C++': '.mm',
  'C99 (Clang)': '.c',
  'C++98 (Clang)': '.cc',
  'C++11 (Clang)': '.cc',
  'C++14 (Clang)': '.cc',
  'C11 (Clang)': '.c',
  'C++17 (Clang)': '.cc',
  'C++20 (Clang)': '.cc',
  'Golfscript': '.gs',
  'Assembly (32bit)': '.o',
  'Assembly (64bit)': '.o',
  'VB.NET 4.0 (Mono)': '.vb',
  'Bash': '.sh',
  'Fortran': '.f95',
  'Scheme': '.scm',
  'Ada': '.ada',
  'awk': '.awk',
  'OCaml': '.ml',
  'Brainf**k': '.bf',
  'Whitespace': '.ws',
  'Tcl': '.tcl',
  'Rhino': '.js',
  'Cobol': '.cob',
  'Pike': '.pike',
  'sed': '.sed',
  'Boo': '.boo',
  'INTERCAL': '.i',
  'bc': '.bc',
  'Cobra': '.cobra',
  'Algol 68': '.a68',
  'Befunge': '.bf',
  'Haxe': '.py',
  'LOLCODE': '.lol',
  '아희': '.aheui',
  'C# 9.0 (.NET)': '.cs',
  'Go (gccgo)': '.go',
  'Java 15': '.java',
  'Ruby 1.8': '.rb',
  'Ruby 1.9': '.rb',
  'Haskell': '.hs',
  'F# (.NET)': '.fs',
  'Visual Basic (.NET)': '.vb',
  'C90': '.c',
  'C2x': '.c',
  'C90 (Clang)': '.c',
  'C2x (Clang)': '.c',
  'TypeScript': '.ts',
  'C# 3.0 (Mono)': '.cs',
  'VB.NET 2.0 (Mono)': '.vb',
  'Nemerle': '.n',
  'Nimrod': '.nim',
  'FreeBASIC': '.bas',
  'Coq': '.v',
  'Minecraft': '.mca',
  'SystemVerilog': '.sv',
  'APECODE': '.ape'
};

// BOJ Levels
const bj_level = {
  0: 'Unrated',
  1: 'Bronze V',
  2: 'Bronze IV',
  3: 'Bronze III',
  4: 'Bronze II',
  5: 'Bronze I',
  6: 'Silver V',
  7: 'Silver IV',
  8: 'Silver III',
  9: 'Silver II',
  10: 'Silver I',
  11: 'Gold V',
  12: 'Gold IV',
  13: 'Gold III',
  14: 'Gold II',
  15: 'Gold I',
  16: 'Platinum V',
  17: 'Platinum IV',
  18: 'Platinum III',
  19: 'Platinum II',
  20: 'Platinum I',
  21: 'Diamond V',
  22: 'Diamond IV',
  23: 'Diamond III',
  24: 'Diamond II',
  25: 'Diamond I',
  26: 'Ruby V',
  27: 'Ruby IV',
  28: 'Ruby III',
  29: 'Ruby II',
  30: 'Ruby I',
  31: 'Master',
};

// prettier-ignore
const categories = {
  'math': '수학',
  'implementation': '구현',
  'dp': '다이나믹 프로그래밍',
  'graphs': '그래프 이론',
  'data_structures': '자료 구조',
  'string': '문자열',
  'greedy': '그리디 알고리즘',
  'bruteforcing': '브루트포스 알고리즘',
  'graph_traversal': '그래프 탐색',
  'sorting': '정렬',
  'geometry': '기하학',
  'number_theory': '정수론',
  'trees': '트리',
  'segtree': '세그먼트 트리',
  'binary_search': '이분 탐색',
  'bfs': '너비 우선 탐색',
  'arithmetic': '사칙연산',
  'simulation': '시뮬레이션',
  'dfs': '깊이 우선 탐색',
  'combinatorics': '조합론',
  'prefix_sum': '누적 합',
  'ad_hoc': '애드 혹',
  'constructive': '구성적',
  'bitmask': '비트마스킹',
  'dijkstra': '다익스트라',
  'case_work': '많은 조건 분기',
  'backtracking': '백트래킹',
  'disjoint_set': '분리 집합',
  'parsing': '파싱',
  'divide_and_conquer': '분할 정복',
  'sweeping': '스위핑',
  'tree_set': '트리를 사용한 집합과 맵',
  'priority_queue': '우선순위 큐',
  'hash_set': '해시를 사용한 집합과 맵',
  'dp_tree': '트리에서의 다이나믹 프로그래밍',
  'two_pointer': '두 포인터',
  'stack': '스택',
  'flow': '최대 유량',
  'primality_test': '소수 판정',
  'lazyprop': '느리게 갱신되는 세그먼트 트리',
  'game_theory': '게임 이론',
  'dp_bitfield': '비트필드를 이용한 다이나믹 프로그래밍',
  'exponentiation_by_squaring': '분할 정복을 이용한 거듭제곱',
  'arbitrary_precision': '임의 정밀도 / 큰 수 연산',
  'offline_queries': '오프라인 쿼리',
  'recursion': '재귀',
  'sieve': '에라토스테네스의 체',
  'mst': '최소 스패닝 트리',
  'probability': '확률론',
  'bipartite_matching': '이분 매칭',
  'lca': '최소 공통 조상',
  'hashing': '해싱',
  'knapsack': '배낭 문제',
  'floyd_warshall': '플로이드–와샬',
  'scc': '강한 연결 요소',
  'parametric_search': '매개 변수 탐색',
  'topological_sorting': '위상 정렬',
  'precomputation': '런타임 전의 전처리',
  'coordinate_compression': '값 / 좌표 압축',
  'linear_algebra': '선형대수학',
  'inclusion_and_exclusion': '포함 배제의 원리',
  'euclidean': '유클리드 호제법',
  'convex_hull': '볼록 껍질',
  'fft': '고속 푸리에 변환',
  'trie': '트라이',
  'sparse_table': '희소 배열',
  'suffix_array': '접미사 배열과 LCP 배열',
  'mcmf': '최소 비용 최대 유량',
  'smaller_to_larger': '작은 집합에서 큰 집합으로 합치는 테크닉',
  'calculus': '미적분학',
  'cht': '볼록 껍질을 이용한 최적화',
  'kmp': 'KMP',
  'deque': '덱',
  'randomization': '무작위화',
  'sqrt_decomposition': '제곱근 분할법',
  'sliding_window': '슬라이딩 윈도우',
  'euler_tour_technique': '오일러 경로 테크닉',
  'mitm': '중간에서 만나기',
  'hld': 'Heavy-light 분할',
  'geometry_3d': '3차원 기하학',
  'sprague_grundy': '스프라그–그런디 정리',
  'lis': '가장 긴 증가하는 부분 수열: O(n log n)',
  'line_intersection': '선분 교차 판정',
  'centroid': '센트로이드',
  'articulation': '단절점과 단절선',
  'centroid_decomposition': '센트로이드 분할',
  'ternary_search': '삼분 탐색',
  'gaussian_elimination': '가우스 소거법',
  'permutation_cycle_decomposition': '순열 사이클 분할',
  'mfmc': '최대 유량 최소 컷 정리',
  '2_sat': '2-sat',
  'queue': '큐',
  'bitset': '비트 집합',
  'eulerian_path': '오일러 경로',
  'pst': '퍼시스턴트 세그먼트 트리',
  'physics': '물리학',
  'heuristics': '휴리스틱',
  'cactus': '선인장',
  'pythagoras': '피타고라스 정리',
  'mo': "mo's",
  'crt': '중국인의 나머지 정리',
  'biconnected_component': '이중 연결 요소',
  '0_1_bfs': '0-1 너비 우선 탐색',
  'splay_tree': '스플레이 트리',
  'divide_and_conquer_optimization': '분할 정복을 사용한 최적화',
  'planar_graph': '평면 그래프',
  'extended_euclidean': '확장 유클리드 호제법',
  'bellman_ford': '벨만–포드',
  'flt': '페르마의 소정리',
  'aho_corasick': '아호-코라식',
  'merge_sort_tree': '머지 소트 트리',
  'modular_multiplicative_inverse': '모듈로 곱셈 역원',
  'multi_segtree': '다차원 세그먼트 트리',
  'berlekamp_massey': '벌래캠프–매시',
  'euler_characteristic': '오일러 지표 (χ=V-E+F)',
  'pbs': '병렬 이분 탐색',
  'regex': '정규 표현식',
  'euler_phi': '오일러 피 함수',
  'rabin_karp': '라빈–카프',
  'linked_list': '연결 리스트',
  'link_cut_tree': '링크/컷 트리',
  'point_in_convex_polygon': '볼록 다각형 내부의 점 판정',
  'rotating_calipers': '회전하는 캘리퍼스',
  'linearity_of_expectation': '기댓값의 선형성',
  'dp_deque': '덱을 이용한 다이나믹 프로그래밍',
  'polygon_area': '다각형의 넓이',
  'mobius_inversion': '뫼비우스 반전 공식',
  'dp_connection_profile': '커넥션 프로파일을 이용한 다이나믹 프로그래밍',
  'manacher': '매내처',
  'tsp': '외판원 순회 문제',
  'slope_trick': '함수 개형을 이용한 최적화',
  'pollard_rho': '폴라드 로',
  'numerical_analysis': '수치해석',
  'interpreter': '인터프리터',
  'tree_isomorphism': '트리 동형 사상',
  'offline_dynamic_connectivity': '오프라인 동적 연결성 판정',
  'hall': '홀의 결혼 정리',
  'alien': 'Aliens 트릭',
  'dual_graph': '쌍대 그래프',
  'miller_rabin': '밀러–라빈 소수 판별법',
  'linear_programming': '선형 계획법',
  'point_in_non_convex_polygon': '오목 다각형 내부의 점 판정',
  'matroid': '매트로이드',
  'voronoi': '보로노이 다이어그램',
  'burnside': '번사이드 보조정리',
  'discrete_log': '이산 로그',
  'lucas': '뤼카 정리',
  'kitamasa': '키타마사',
  'hungarian': '헝가리안',
  'bipartite_graph': '이분 그래프',
  'general_matching': '일반적인 매칭',
  'min_enclosing_circle': '최소 외접원',
  'z': 'z',
  'knuth': '크누스 최적화',
  'duality': '쌍대성',
  'dominator_tree': '도미네이터 트리',
  'rope': '로프',
  'statistics': '통계학',
  'stoer_wagner': '스토어–바그너',
  'palindrome_tree': '회문 트리',
  'bidirectional_search': '양방향 탐색',
  'monotone_queue_optimization': '단조 큐를 이용한 최적화',
  'hirschberg': '히르쉬버그',
  'discrete_sqrt': '이산 제곱근',
  'geometry_hyper': '4차원 이상의 기하학',
  'stable_marriage': '안정 결혼 문제',
  'simulated_annealing': '담금질 기법',
  'suffix_tree': '접미사 트리',
  'directed_mst': '유향 최소 신장 트리',
  'majority_vote': '보이어–무어 다수결 투표',
  'pigeonhole_principle': '비둘기집 원리',
  'half_plane_intersection': '반평면 교집합',
  'bayes': '베이즈 정리',
  'green': '그린 정리',
  'knuth_x': '크누스 X',
  'top_tree': '탑 트리',
  'dancing_links': '춤추는 링크',
  'pick': '픽의 정리',
  'a_star': 'a*',
  'rb_tree': '레드-블랙 트리',
  'delaunay': '델로네 삼각분할',
  'discrete_kth_root': '이산 k제곱근',
  'circulation': '서큘레이션',
  'tree_compression': '트리 압축',
  'generating_function': '생성 함수',
  'multipoint_evaluation': '다중 대입값 계산',
  'differential_cryptanalysis': '차분 공격',
};

const CommitType = {
  readme: 'readmeSha',
  code: 'codeSha',
};

const titleRegex = new RegExp('[^a-zA-Z0-9가-힣 -]', 'i');

/* state of upload for progress */
const uploadState = { uploading: false };
